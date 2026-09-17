import { NextResponse } from 'next/server';
import { getDatabasePool } from '../../../lib/database';
import { getDownloadSummary } from '../../../lib/downloadStats';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type CountRow = { label: string; count: string };

export async function GET() {
  try {
    const pool = getDatabasePool();
    const [summary, dailyResult, deviceResult, sourceResult, countryResult, recentResult] = await Promise.all([
      getDownloadSummary(),
      pool.query<{ date: string; count: string }>(`
        with days as (
          select generate_series(
            timezone('Asia/Jakarta', now())::date - interval '13 days',
            timezone('Asia/Jakarta', now())::date,
            interval '1 day'
          )::date as date
        )
        select days.date::text, count(events.id)::text as count
        from days
        left join public.download_events events
          on timezone('Asia/Jakarta', events.occurred_at)::date = days.date
        group by days.date
        order by days.date
      `),
      pool.query<CountRow>(`
        select device_type as label, count(*)::text as count
        from public.download_events
        group by device_type
        order by count(*) desc
      `),
      pool.query<CountRow>(`
        select source as label, count(*)::text as count
        from public.download_events
        group by source
        order by count(*) desc
      `),
      pool.query<CountRow>(`
        select coalesce(country, 'Tidak diketahui') as label, count(*)::text as count
        from public.download_events
        group by country
        order by count(*) desc
        limit 8
      `),
      pool.query<{
        id: string;
        occurred_at: Date;
        source: string;
        device_type: string;
        browser: string;
        operating_system: string;
        country: string | null;
        city: string | null;
        referrer_host: string | null;
      }>(`
        select
          id::text,
          occurred_at,
          source,
          device_type,
          browser,
          operating_system,
          country,
          city,
          referrer_host
        from public.download_events
        order by occurred_at desc
        limit 25
      `),
    ]);

    return NextResponse.json(
      {
        summary,
        daily: dailyResult.rows.map((row) => ({ date: row.date, count: Number(row.count) })),
        devices: deviceResult.rows.map((row) => ({ label: row.label, count: Number(row.count) })),
        sources: sourceResult.rows.map((row) => ({ label: row.label, count: Number(row.count) })),
        countries: countryResult.rows.map((row) => ({ label: row.label, count: Number(row.count) })),
        recent: recentResult.rows.map((row) => ({
          id: row.id,
          occurredAt: row.occurred_at.toISOString(),
          source: row.source,
          deviceType: row.device_type,
          browser: row.browser,
          operatingSystem: row.operating_system,
          country: row.country,
          city: row.city,
          referrerHost: row.referrer_host,
        })),
      },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } },
    );
  } catch (error) {
    console.error('Failed to load download analytics.', error);
    return NextResponse.json({ error: 'Statistik tidak dapat dimuat.' }, { status: 503 });
  }
}
