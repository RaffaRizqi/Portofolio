'use client';
import React, { useEffect, useState } from 'react';

const GREETINGS = ["Hello", "Bonjour", "Hola", "Ciao", "Guten Tag", "Konnichiwa", "Anyoung Haseyo", "Ni Hao", "Sampurasun", "Horas", "Sugeng Rawuh", "Ba'a Kaba", "Om Swastiastu", "Halo"];

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'greeting-exit' | 'wipe' | 'done'>('loading');
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    let current = 0;
    let greetIdx = 0;
    let hideTimeout: NodeJS.Timeout;
    let removeTimeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 3) + 1;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        // Phase 1: Greeting text exits upward
        hideTimeout = setTimeout(() => {
          setPhase('greeting-exit');
          // Phase 2: Full screen wipe up
          removeTimeout = setTimeout(() => {
            setPhase('wipe');
            document.body.style.overflow = 'unset';
            // Phase 3: Done
            setTimeout(() => setPhase('done'), 1200);
          }, 600);
        }, 400);
      }
      setProgress(current);
    }, 40);

    const greetInterval = setInterval(() => {
      if (current < 100) {
        greetIdx = (greetIdx + 1) % GREETINGS.length;
        setGreetingIndex(greetIdx);
      } else {
        setGreetingIndex(GREETINGS.length - 1);
        clearInterval(greetInterval);
      }
    }, 120);

    return () => {
      clearInterval(interval);
      clearInterval(greetInterval);
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#05070a',
        transform: phase === 'wipe' ? 'translateY(-100%)' : 'translateY(0)',
        borderBottomLeftRadius: phase === 'wipe' ? '50%' : '0',
        borderBottomRightRadius: phase === 'wipe' ? '50%' : '0',
        transition: phase === 'wipe'
          ? 'transform 1.1s cubic-bezier(0.76, 0, 0.24, 1), border-radius 1.1s cubic-bezier(0.76, 0, 0.24, 1)'
          : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Main greeting */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            width: '0.75rem',
            height: '0.75rem',
            background: '#22c55e',
            borderRadius: '50%',
            display: 'inline-block',
            opacity: phase === 'greeting-exit' ? 0 : 1,
            transform: phase === 'greeting-exit' ? 'translateY(-120%)' : 'translateY(0)',
            transition: 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.4s ease',
          }}
        />
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 500,
            color: '#f7fbff',
            margin: 0,
            transform: phase === 'greeting-exit' ? 'translateY(-120%)' : 'translateY(0)',
            opacity: phase === 'greeting-exit' ? 0 : 1,
            transition: 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.4s ease',
          }}
        >
          {GREETINGS[greetingIndex]}
        </h2>
      </div>

      {/* Bottom counter + progress */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 4vw, 3rem)',
          right: 'clamp(2rem, 4vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.75rem',
          opacity: phase === 'greeting-exit' || phase === 'wipe' ? 0 : 1,
          transform: phase === 'greeting-exit' ? 'translateY(-20px)' : 'translateY(0)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#f7fbff',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {progress}%
        </div>
        <div
          style={{
            width: '150px',
            height: '2px',
            background: 'rgba(255,255,255,0.1)',
            overflow: 'hidden',
            borderRadius: '2px',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #22c55e, #38bdf8)',
              transition: 'width 0.15s ease-out',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>

      {/* Stagger line decorations */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          gap: '2px',
          height: '3px',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '100%',
              background: 'linear-gradient(90deg, #22c55e, #38bdf8)',
              transform: `scaleX(${progress / 100})`,
              transformOrigin: 'left',
              transition: `transform 0.3s ease ${i * 0.05}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
