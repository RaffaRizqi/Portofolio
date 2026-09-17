import { getDatabasePool } from './database';

export type DownloadSummary = {
  totalClicks: number;
  uniqueVisitors: number;
  clicksToday: number;
  clicksLast24Hours: number;
  lastDownloadAt: string | null;
};

export async function getDownloadSummary(): Promise<DownloadSummary> {
  const result = await getDatabasePool().query<{
    total_clicks: string;
    unique_visitors: string;
    clicks_today: string;
    clicks_last_24_hours: string;
    last_download_at: Date | null;
  }>(`
    select
      count(*)::text as total_clicks,
      count(distinct session_id)::text as unique_visitors,
      count(*) filter (
        where timezone('Asia/Jakarta', occurred_at)::date = timezone('Asia/Jakarta', now())::date
      )::text as clicks_today,
      count(*) filter (where occurred_at >= now() - interval '24 hours')::text as clicks_last_24_hours,
      max(occurred_at) as last_download_at
    from public.download_events
  `);

  const summary = result.rows[0];

  return {
    totalClicks: Number(summary.total_clicks),
    uniqueVisitors: Number(summary.unique_visitors),
    clicksToday: Number(summary.clicks_today),
    clicksLast24Hours: Number(summary.clicks_last_24_hours),
    lastDownloadAt: summary.last_download_at?.toISOString() ?? null,
  };
}
