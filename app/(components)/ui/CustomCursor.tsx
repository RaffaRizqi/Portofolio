'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';

export function CustomCursor() {
  const [isMobileDevice, setIsMobileDevice] = useState(true);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmall = window.innerWidth < 1024;
      setIsMobileDevice(hasTouch || isSmall);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animate = useCallback(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Precision dot tracks pointer instantly
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${posRef.current.x - 3}px, ${posRef.current.y - 3}px, 0)`;
    }

    // Outer ring follows smoothly
    ringPosRef.current.x = lerp(ringPosRef.current.x, posRef.current.x, 0.18);
    ringPosRef.current.y = lerp(ringPosRef.current.y, posRef.current.y, 0.18);

    if (ringRef.current) {
      const size = isHoveredRef.current ? 44 : 22;
      ringRef.current.style.transform = `translate3d(${ringPosRef.current.x - size / 2}px, ${ringPosRef.current.y - size / 2}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isMobileDevice) return;

    const moveMouse = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea') || target.closest('[role="button"]');
      isHoveredRef.current = !!clickable;

      if (ringRef.current) {
        if (clickable) {
          ringRef.current.style.width = '44px';
          ringRef.current.style.height = '44px';
          ringRef.current.style.borderColor = 'rgba(56, 189, 248, 0.6)';
          ringRef.current.style.backgroundColor = 'rgba(56, 189, 248, 0.08)';
          ringRef.current.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.25)';
        } else {
          ringRef.current.style.width = '22px';
          ringRef.current.style.height = '22px';
          ringRef.current.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          ringRef.current.style.backgroundColor = 'transparent';
          ringRef.current.style.boxShadow = 'none';
        }
      }

      if (dotRef.current) {
        dotRef.current.style.opacity = clickable ? '0.4' : '1';
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobileDevice, animate]);

  if (isMobileDevice) return null;

  return (
    <>
      <style jsx global>{`
        @media (max-width: 1023px), (pointer: coarse) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none !important;
          }
        }
      `}</style>
      {/* Precision inner dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#38bdf8',
          boxShadow: '0 0 10px #38bdf8',
          pointerEvents: 'none',
          zIndex: 999999,
          transition: 'opacity 0.2s ease',
        }}
      />
      {/* Sleek outer ring */}
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          border: '1.5px solid rgba(255, 255, 255, 0.3)',
          pointerEvents: 'none',
          zIndex: 999998,
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
          backdropFilter: 'blur(1px)',
        }}
      />
    </>
  );
}
