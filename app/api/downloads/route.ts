import { NextRequest, NextResponse } from 'next/server';
import { getDatabasePool } from '../../lib/database';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_SOURCES = new Set(['header', 'hero', 'bottom', 'other']);

type DownloadPayload = {
  sessionId?: unknown;
  source?: unknown;
  referrer?: unknown;
};

function classifyUserAgent(userAgent: string) {
  const browser = /Edg\//.test(userAgent)
    ? 'Edge'
    : /OPR\//.test(userAgent)
      ? 'Opera'
      : /Chrome\//.test(userAgent)
        ? 'Chrome'
        : /Firefox\//.test(userAgent)
          ? 'Firefox'
          : /Safari\//.test(userAgent)
            ? 'Safari'
            : 'Lainnya';

  const operatingSystem = /Android/.test(userAgent)
    ? 'Android'
    : /iPhone|iPad|iPod/.test(userAgent)
      ? 'iOS'
      : /Windows/.test(userAgent)
        ? 'Windows'
        : /Mac OS X/.test(userAgent)
          ? 'macOS'
          : /Linux/.test(userAgent)
            ? 'Linux'
            : 'Lainnya';

  const deviceType = /iPad|Tablet/.test(userAgent)
    ? 'Tablet'
    : /Mobile|Android|iPhone|iPod/.test(userAgent)
      ? 'Mobile'
      : 'Desktop';

  return { browser, operatingSystem, deviceType };
}

function cleanHeader(value: string | null, maxLength: number) {
  return value?.trim().slice(0, maxLength) || null;
}

function getReferrerHost(value: unknown) {
  if (typeof value !== 'string' || value.length > 500) return null;

  try {
    return new URL(value).hostname.slice(0, 255) || null;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  let payload: DownloadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Payload tidak valid.' }, { status: 400 });
  }

  const sessionId = typeof payload.sessionId === 'string' ? payload.sessionId.trim() : '';
  const requestedSource = typeof payload.source === 'string' ? payload.source : 'other';

  if (!/^[a-zA-Z0-9_-]{16,64}$/.test(sessionId)) {
    return NextResponse.json({ error: 'Session tidak valid.' }, { status: 400 });
  }

  const source = ALLOWED_SOURCES.has(requestedSource) ? requestedSource : 'other';
  const userAgent = request.headers.get('user-agent') ?? '';
  const { browser, operatingSystem, deviceType } = classifyUserAgent(userAgent);

  try {
    await getDatabasePool().query(
      `insert into public.download_events (
        session_id,
        source,
        path,
        device_type,
        browser,
        operating_system,
        country,
        region,
        city,
        referrer_host
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [
        sessionId,
        source,
        '/rebaflix',
        deviceType,
        browser,
        operatingSystem,
        cleanHeader(request.headers.get('x-vercel-ip-country'), 2),
        cleanHeader(request.headers.get('x-vercel-ip-country-region'), 16),
        cleanHeader(request.headers.get('x-vercel-ip-city'), 128),
        getReferrerHost(payload.referrer),
      ],
    );

    return NextResponse.json({ recorded: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to record download click.', error);
    return NextResponse.json({ error: 'Event tidak dapat dicatat.' }, { status: 503 });
  }
}
