'use client';
import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  /** Speed of parallax: negative = opposite direction, 0 = no parallax */
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ParallaxSection({
  children,
  speed = -0.15,
  className = '',
  style = {},
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Only calculate parallax when element is in viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
              const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
              setOffset((scrollProgress - 0.5) * speed * 200);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${offset}px, 0)`,
        transition: 'transform 0.1s linear',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
