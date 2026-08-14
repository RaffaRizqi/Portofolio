'use client';
import React, { useEffect, useState } from 'react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 5) + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLeaving(true);
          document.body.style.overflow = 'unset';
          setTimeout(() => setDone(true), 700);
        }, 250);
      }
      setProgress(current);
    }, 30);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999999,
        background: '#f8f6f0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: leaving ? 0 : 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      {/* Name */}
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
          fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
          fontWeight: 900,
          color: '#121316',
          letterSpacing: '-0.03em',
          marginBottom: '2rem',
        }}
      >
        RAFFA<span style={{ color: '#f59e0b' }}>.</span>DEV
      </p>

      {/* Progress track */}
      <div
        style={{
          width: 'clamp(160px, 30vw, 280px)',
          height: '3px',
          background: '#e5e0d3',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: '#121316',
            borderRadius: '2px',
            transition: 'width 0.06s ease-out',
          }}
        />
      </div>

      {/* Progress number */}
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#9ca3af',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.04em',
        }}
      >
        {progress}%
      </span>
    </div>
  );
}
