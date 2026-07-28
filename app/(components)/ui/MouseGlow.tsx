'use client';
import React, { useEffect, useRef } from 'react';

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.left = `${e.clientX}px`;
            glowRef.current.style.top = `${e.clientY}px`;
          }
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed', width: '800px', height: '800px',
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.045), rgba(56, 189, 248, 0.035), transparent 62%)',
        transform: 'translate(-50%, -50%) rotate(10deg)', pointerEvents: 'none',
        zIndex: 1, top: '-1000px', left: '-1000px', transition: 'width 0.3s, height 0.3s',
      }}
    />
  );
}
