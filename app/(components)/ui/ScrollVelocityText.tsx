'use client';
import React, { useEffect, useRef, useState } from 'react';

interface ScrollVelocityTextProps {
  text: string;
  /** Base speed in px/frame */
  baseSpeed?: number;
  className?: string;
}

export function ScrollVelocityText({
  text,
  baseSpeed = 1,
  className = '',
}: ScrollVelocityTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const directionRef = useRef(1);
  const lastScrollRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScrollRef.current;
      velocityRef.current = diff;
      directionRef.current = diff > 0 ? 1 : -1;
      lastScrollRef.current = currentScroll;
    };

    const animate = () => {
      // Decay velocity
      velocityRef.current *= 0.92;
      
      // Speed based on scroll velocity
      const speed = baseSpeed + Math.abs(velocityRef.current) * 0.5;
      scrollRef.current -= speed * directionRef.current;

      if (containerRef.current) {
        const contentWidth = containerRef.current.scrollWidth / 2;
        // Reset position seamlessly
        if (Math.abs(scrollRef.current) >= contentWidth) {
          scrollRef.current = scrollRef.current % contentWidth;
        }
        containerRef.current.style.transform = `translate3d(${scrollRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [baseSpeed]);

  const repeatedText = `${text} — ${text} — ${text} — ${text} — `;

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        whiteSpace: 'nowrap',
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
      }}
    >
      <div
        ref={containerRef}
        className={className}
        style={{
          display: 'inline-flex',
          willChange: 'transform',
        }}
      >
        <span style={{ paddingRight: '2rem' }}>{repeatedText}</span>
        <span style={{ paddingRight: '2rem' }}>{repeatedText}</span>
      </div>
    </div>
  );
}
