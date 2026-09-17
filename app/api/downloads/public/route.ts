import { NextResponse } from 'next/server';
import { getDownloadSummary } from '../../../lib/downloadStats';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(await getDownloadSummary(), {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    });
  } catch (error) {
    console.error('Failed to load public download statistics.', error);
    return NextResponse.json({ error: 'Statistik belum dapat dimuat.' }, { status: 503 });
  }
}
