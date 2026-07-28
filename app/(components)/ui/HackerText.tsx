'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function HackerText({
  text,
  className = '',
  style = {},
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  const triggerEffect = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            if (text[index] === ' ') return ' ';
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!);
      }

      iteration += 1 / 2;
    }, 30);
  }, [text]);

  // Trigger on scroll into view (once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          triggerEffect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [triggerEffect]);

  return (
    <h2 ref={ref} className={className} style={style} onMouseEnter={triggerEffect}>
      {displayText}
    </h2>
  );
}
