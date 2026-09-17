'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, MonitorSmartphone, RefreshCw, Users } from 'lucide-react';
import styles from './analytics.module.css';

type BreakdownItem = { label: string; count: number };
type AnalyticsData = {
  summary: {
    totalClicks: number;
    uniqueVisitors: number;
    clicksToday: number;
    clicksLast24Hours: number;
    lastDownloadAt: string | null;
  };
  daily: Array<{ date: string; count: number }>;
  devices: BreakdownItem[];
  sources: BreakdownItem[];
  countries: BreakdownItem[];
  recent: Array<{
    id: string;
    occurredAt: string;
    source: string;
    deviceType: string;
    browser: string;
    operatingSystem: string;
    country: string | null;
    city: string | null;
    referrerHost: string | null;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: '2-digit',
  month: 'short',
  timeZone: 'Asia/Jakarta',
});

const dateTimeFormatter = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
});

function Breakdown({ title, items }: { title: string; items: BreakdownItem[] }) {
  const total = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <section className={styles.breakdown}>
      <h2>{title}</h2>
      {items.length === 0 ? (
        <p className={styles.emptyCompact}>Belum ada data.</p>
      ) : (
        <ul>
          {items.map((item) => {
            const percentage = total > 0 ? Math.round((item.count / total) * 100) : 0;
            return (
              <li key={item.label}>
                <div className={styles.breakdownLabel}>
                  <span>{item.label}</span>
                  <strong>{item.count.toLocaleString('id-ID')}</strong>
                </div>
                <div className={styles.track} aria-label={`${item.label}: ${percentage}%`}>
                  <span style={{ width: `${percentage}%` }} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default function RebaFlixAnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(null);

  const loadAnalytics = useCallback(async (signal?: AbortSignal) => {
    try {
      const response = await fetch('/api/downloads/stats', {
        cache: 'no-store',
        credentials: 'same-origin',
        signal,
      });

      if (!response.ok) throw new Error('Statistik gagal dimuat.');

      const data = (await response.json()) as AnalyticsData;
      setAnalytics(data);
      setLastUpdatedAt(new Date());
      setError(null);
    } catch (requestError) {
      if (requestError instanceof DOMException && requestError.name === 'AbortError') return;
      setError('Koneksi statistik terputus. Data akan dicoba lagi otomatis.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const initialRequest = window.setTimeout(() => void loadAnalytics(controller.signal), 0);
    const interval = window.setInterval(() => void loadAnalytics(), 5_000);

    return () => {
      controller.abort();
      window.clearTimeout(initialRequest);
      window.clearInterval(interval);
    };
  }, [loadAnalytics]);

  const highestDailyCount = useMemo(
    () => Math.max(1, ...(analytics?.daily.map((item) => item.count) ?? [])),
    [analytics],
  );

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.shell}>
          <Link href="/rebaflix" className={styles.backLink}>
            <ArrowLeft size={17} />
            <span>RebaFlix</span>
          </Link>
          <div className={styles.liveStatus}>
            <span aria-hidden="true" />
            Live, refresh 5 detik
          </div>
        </div>
      </header>

      <div className={styles.shell}>
        <div className={styles.headingRow}>
          <div>
            <p className={styles.kicker}>PRIVATE ANALYTICS</p>
            <h1>Riwayat Download APK</h1>
            <p>Aktivitas download RebaFlix, dicatat tanpa menyimpan alamat IP mentah.</p>
          </div>
          <button className={styles.refreshButton} onClick={() => void loadAnalytics()} disabled={isLoading}>
            <RefreshCw size={17} />
            Perbarui
          </button>
        </div>

        {error ? <div className={styles.errorNotice}>{error}</div> : null}

        {isLoading && !analytics ? (
          <div className={styles.loadingState} aria-live="polite">
            <span />
            <span />
            <span />
          </div>
        ) : analytics ? (
          <>
            <section className={styles.metrics} aria-label="Ringkasan download">
              <div>
                <Download size={19} />
                <span>Total klik</span>
                <strong>{analytics.summary.totalClicks.toLocaleString('id-ID')}</strong>
              </div>
              <div>
                <Users size={19} />
                <span>Pengunjung unik</span>
                <strong>{analytics.summary.uniqueVisitors.toLocaleString('id-ID')}</strong>
              </div>
              <div>
                <MonitorSmartphone size={19} />
                <span>Hari ini</span>
                <strong>{analytics.summary.clicksToday.toLocaleString('id-ID')}</strong>
              </div>
              <div>
                <span className={styles.metricClock}>24H</span>
                <span>24 jam terakhir</span>
                <strong>{analytics.summary.clicksLast24Hours.toLocaleString('id-ID')}</strong>
              </div>
            </section>

            <section className={styles.chartSection}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Tren 14 Hari</h2>
                  <p>Jumlah klik download per hari, zona waktu Jakarta.</p>
                </div>
                <span>
                  Terakhir: {analytics.summary.lastDownloadAt
                    ? dateTimeFormatter.format(new Date(analytics.summary.lastDownloadAt))
                    : 'belum ada'}
                </span>
              </div>
              <ol className={styles.chart}>
                {analytics.daily.map((item) => (
                  <li key={item.date}>
                    <strong>{item.count}</strong>
                    <div className={styles.barTrack}>
                      <span style={{ height: `${Math.max(4, (item.count / highestDailyCount) * 100)}%` }} />
                    </div>
                    <time dateTime={item.date}>{dateFormatter.format(new Date(`${item.date}T12:00:00+07:00`))}</time>
                  </li>
                ))}
              </ol>
            </section>

            <div className={styles.breakdownGrid}>
              <Breakdown title="Perangkat" items={analytics.devices} />
              <Breakdown title="Posisi tombol" items={analytics.sources} />
              <Breakdown title="Negara" items={analytics.countries} />
            </div>

            <section className={styles.recentSection}>
              <div className={styles.sectionHeading}>
                <div>
                  <h2>Aktivitas Terbaru</h2>
                  <p>25 klik terakhir dari seluruh tombol download.</p>
                </div>
                <span>{lastUpdatedAt ? `Sinkron ${lastUpdatedAt.toLocaleTimeString('id-ID')}` : 'Menghubungkan'}</span>
              </div>
              {analytics.recent.length === 0 ? (
                <div className={styles.emptyState}>
                  <Download size={24} />
                  <strong>Belum ada download</strong>
                  <p>Aktivitas pertama akan muncul otomatis setelah tombol APK diklik.</p>
                </div>
              ) : (
                <div className={styles.tableWrap}>
                  <table>
                    <thead>
                      <tr>
                        <th>Waktu</th>
                        <th>Perangkat</th>
                        <th>Sumber</th>
                        <th>Lokasi</th>
                        <th>Referrer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analytics.recent.map((event) => (
                        <tr key={event.id}>
                          <td>{dateTimeFormatter.format(new Date(event.occurredAt))}</td>
                          <td><strong>{event.deviceType}</strong><span>{event.browser} · {event.operatingSystem}</span></td>
                          <td><span className={styles.sourceBadge}>{event.source}</span></td>
                          <td>{[event.city, event.country].filter(Boolean).join(', ') || 'Tidak diketahui'}</td>
                          <td>{event.referrerHost || 'Langsung'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        ) : null}
      </div>
    </main>
  );
}
