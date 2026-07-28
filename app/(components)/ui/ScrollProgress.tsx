'use client';
import React, { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      setProgress((scrollPosition / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: '3px', width: `${progress}%`,
      background: 'linear-gradient(90deg, #22c55e, #38bdf8)', zIndex: 9999999, transition: 'width 0.1s ease-out',
      boxShadow: '0 0 15px rgba(34, 197, 94, 0.45), 0 0 5px rgba(56, 189, 248, 0.45)'
    }} />
  );
}
