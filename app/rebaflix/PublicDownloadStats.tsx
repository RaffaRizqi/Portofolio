'use client';

import { useEffect, useState } from 'react';
import { Activity, CalendarDays, Download, Users } from 'lucide-react';
import styles from './rebaflix.module.css';

type DownloadStats = {
  totalClicks: number;
  uniqueVisitors: number;
  clicksToday: number;
  clicksLast24Hours: number;
  lastDownloadAt: string | null;
};

const compactNumber = new Intl.NumberFormat('id-ID', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

function formatActivityTime(value: string | null) {
  if (!value) return 'Belum ada';

  const seconds = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000));
  if (seconds < 15) return 'Baru saja';
  if (seconds < 60) return `${seconds} detik lalu`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} menit lalu`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} jam lalu`;

  const days = Math.floor(hours / 24);
  return `${days} hari lalu`;
}

export function PublicDownloadStats() {
  const [stats, setStats] = useState<DownloadStats | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isActive = true;
    let refreshTimer: ReturnType<typeof setTimeout>;
    let controller: AbortController | undefined;

    const loadStats = async () => {
      controller = new AbortController();

      try {
        const response = await fetch('/api/downloads/public', {
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!response.ok) throw new Error('Public download statistics request failed.');

        const nextStats = (await response.json()) as DownloadStats;
        if (isActive) {
          setStats(nextStats);
          setHasError(false);
        }
      } catch (error) {
        if (isActive && !(error instanceof DOMException && error.name === 'AbortError')) {
          setHasError(true);
        }
      } finally {
        if (isActive) refreshTimer = setTimeout(loadStats, 5_000);
      }
    };

    void loadStats();

    return () => {
      isActive = false;
      controller?.abort();
      clearTimeout(refreshTimer);
    };
  }, []);

  const metrics = [
    {
      label: 'Total klik download',
      value: stats ? compactNumber.format(stats.totalClicks) : '—',
      detail: 'Tercatat sejak pelacakan aktif',
      icon: Download,
      color: 'yellow',
    },
    {
      label: 'Pengunjung unik',
      value: stats ? compactNumber.format(stats.uniqueVisitors) : '—',
      detail: 'Berdasarkan sesi anonim',
      icon: Users,
      color: 'green',
    },
    {
      label: 'Klik hari ini',
      value: stats ? compactNumber.format(stats.clicksToday) : '—',
      detail: `${stats?.clicksLast24Hours ?? 0} dalam 24 jam terakhir`,
      icon: CalendarDays,
      color: 'blue',
    },
    {
      label: 'Aktivitas terbaru',
      value: stats ? formatActivityTime(stats.lastDownloadAt) : '—',
      detail: 'Diperbarui otomatis',
      icon: Activity,
      color: 'pink',
    },
  ] as const;

  return (
    <section className={styles.publicStatsSection} aria-labelledby="statistik-rebaflix">
      <div className={styles.container}>
        <div className={styles.publicStatsHeading}>
          <div className={styles.liveEyebrow}>
            <span className={styles.liveDot} aria-hidden="true" />
            Data publik langsung
          </div>
          <h2 id="statistik-rebaflix" className={styles.sectionTitle}>
            Angka RebaFlix, apa adanya.
          </h2>
          <p className={styles.sectionSubtitle}>
            Riwayat klik selama distribusi sebelumnya. Angka tetap diperbarui otomatis dan tidak memuat data pribadi.
          </p>
        </div>

        <div className={styles.publicStatsGrid} aria-live="polite" aria-busy={!stats}>
          {metrics.map(({ label, value, detail, icon: Icon, color }) => (
            <article key={label} className={styles.publicStatCard}>
              <div className={`${styles.publicStatIcon} ${styles[`publicStatIcon_${color}`]}`}>
                <Icon size={21} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <p className={styles.publicStatLabel}>{label}</p>
              <p className={styles.publicStatValue}>{value}</p>
              <p className={styles.publicStatDetail}>{detail}</p>
            </article>
          ))}
        </div>

        {hasError && (
          <p className={styles.publicStatsError} role="status">
            Data realtime sedang disambungkan kembali.
          </p>
        )}
      </div>
    </section>
  );
}
