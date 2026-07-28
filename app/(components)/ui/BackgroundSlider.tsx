'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BG_IMAGES = [
  // Foto 1: IT / Coding Workspace
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  // Foto 2: Saham / Trading Setup
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
  // Foto 3: Branding / Creative Strategy
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
  // Foto 4: IT / Coding Dark Mode
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  // Foto 5: Saham / Crypto Chart
  'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop',
  // Foto 6: Business / Branding Workspace
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop',
  // Foto 7: Tech / Server / Data
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  // Foto 8: Business Analytics
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
];

export function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 5000); // Ganti foto setiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slider-container">
      {BG_IMAGES.map((src, idx) => (
        <div key={idx} className={`bg-slide ${idx === currentIndex ? 'bg-slide-active' : ''}`}>
          <Image 
            src={src} 
            alt={`Slide ${idx}`} 
            fill 
            unoptimized 
            referrerPolicy="no-referrer" 
            style={{ objectFit: 'cover' }} 
          />
        </div>
      ))}
      <div className="bg-slider-overlay"></div>
    </div>
  );
}