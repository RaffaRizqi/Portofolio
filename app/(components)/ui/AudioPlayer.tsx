'use client';
import React, { useState } from 'react';
import { Youtube, X } from 'lucide-react';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="audio-player-container">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="audio-btn"
        title={isPlaying ? "Stop Music" : "Play Music"}
      >
        {isPlaying ? <X size={20} color="#22c55e" /> : <Youtube size={20} color="#ef4444" />}
        <span className="audio-btn-text">{isPlaying ? 'Stop Music' : 'Play Music'}</span>
      </button>

      {isPlaying && (
        <div style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          <iframe 
            src="https://www.youtube.com/embed/iGZ9rYFvkbQ?autoplay=1" 
            width="10" 
            height="10" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
}
