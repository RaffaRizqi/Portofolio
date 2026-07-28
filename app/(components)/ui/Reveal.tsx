'use client';
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  /** Animation variant: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'clip-up' */
  variant?: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'clip-up';
  /** Duration in ms */
  duration?: number;
}

export function Reveal({
  children,
  delay = 0,
  variant = 'slide-up',
  duration = 800,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (variant) {
      case 'slide-left':
        return 'translate3d(-40px, 0, 0)';
      case 'slide-right':
        return 'translate3d(40px, 0, 0)';
      case 'scale':
        return 'translate3d(0, 20px, 0) scale(0.97)';
      default:
        return 'translate3d(0, 30px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}