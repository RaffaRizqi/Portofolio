'use client';

import type { ReactNode } from 'react';

type DownloadSource = 'header' | 'hero' | 'bottom';

type TrackedDownloadLinkProps = {
  source: DownloadSource;
  className: string;
  children: ReactNode;
};

const SESSION_STORAGE_KEY = 'rebaflix-download-session';

function getSessionId() {
  try {
    const existingId = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (existingId) return existingId;

    const sessionId = crypto.randomUUID().replaceAll('-', '');
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
    return sessionId;
  } catch {
    return crypto.randomUUID().replaceAll('-', '');
  }
}

export function TrackedDownloadLink({ source, className, children }: TrackedDownloadLinkProps) {
  const recordDownload = () => {
    void fetch('/api/downloads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: getSessionId(),
        source,
        referrer: document.referrer,
      }),
      keepalive: true,
    }).catch(() => undefined);
  };

  return (
    <a
      href="/rebaflix.apk"
      download="rebaflix-v1.3.0.apk"
      className={className}
      onClick={recordDownload}
    >
      {children}
    </a>
  );
}
