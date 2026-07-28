'use client';
import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** Delay between each character in ms */
  charDelay?: number;
  /** Initial delay before animation starts in ms */
  initialDelay?: number;
  /** Animation type: 'slide-up' | 'fade' | 'clip' */
  variant?: 'slide-up' | 'fade' | 'clip';
}

export function TextReveal({
  text,
  className = '',
  style = {},
  tag: Tag = 'h2',
  charDelay = 30,
  initialDelay = 0,
  variant = 'slide-up',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');
  let globalCharIndex = 0;

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={className}
      style={{ ...style, overflow: 'hidden' }}
    >
      {words.map((word, wordIndex) => {
        const chars = word.split('');
        const wordElement = (
          <span
            key={wordIndex}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {chars.map((char) => {
              const charIdx = globalCharIndex++;
              return (
                <span
                  key={charIdx}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      transform: isVisible
                        ? 'translateY(0) rotate(0deg)'
                        : variant === 'slide-up'
                        ? 'translateY(120%) rotate(5deg)'
                        : variant === 'clip'
                        ? 'translateY(100%)'
                        : 'translateY(40px)',
                      opacity: isVisible ? 1 : 0,
                      transition: `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${
                        initialDelay + charIdx * charDelay
                      }ms, opacity 0.6s ease ${
                        initialDelay + charIdx * charDelay
                      }ms`,
                      willChange: 'transform, opacity',
                    }}
                  >
                    {char}
                  </span>
                </span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span style={{ display: 'inline-block', width: '0.3em' }}>
                {' '}
              </span>
            )}
          </span>
        );
        return wordElement;
      })}
    </Tag>
  );
}
