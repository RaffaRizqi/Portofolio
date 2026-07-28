'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Gamepad2, RotateCcw, X } from 'lucide-react';

type Game =
  | {
      id: 'clickrush' | 'guess' | 'rps';
      mode: 'local';
      name: string;
      desc: string;
    }
  | {
      id: string;
      mode: 'iframe';
      name: string;
      url: string;
      desc: string;
    };

const GAMES: Game[] = [
  {
    id: 'clickrush',
    mode: 'local',
    name: 'Click Rush',
    desc: 'Tap tombol secepat mungkin sebelum waktu habis.'
  },
  {
    id: 'guess',
    mode: 'local',
    name: 'Tebak Angka',
    desc: 'Cari angka rahasia dari 1 sampai 20.'
  },
  {
    id: 'rps',
    mode: 'local',
    name: 'Suit Cepat',
    desc: 'Pilih batu, gunting, atau kertas dan kalahkan bot.'
  },
  {
    id: 'slowroads',
    mode: 'iframe',
    name: 'Slow Roads 3D',
    url: 'https://slowroads.io/',
    desc: 'Game nyetir 3D estetik. Gunakan WASD / Panah / Tap untuk main.'
  },
  {
    id: 'hextris',
    mode: 'iframe',
    name: 'Hextris',
    url: 'https://hextris.io/',
    desc: 'Gunakan Panah Kanan/Kiri atau Tap layar untuk memutar hexagon.'
  },
  {
    id: 'floppy',
    mode: 'iframe',
    name: 'Floppy Bird',
    url: 'https://nebezb.com/floppybird/',
    desc: 'Klik / Tap layar atau Spasi untuk terbang melewati pipa.'
  }
];

function ClickRushGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || timeLeft <= 0) return;
    const timer = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          setRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [running, timeLeft]);

  const reset = () => {
    setScore(0);
    setTimeLeft(10);
    setRunning(false);
  };

  const handleClick = () => {
    if (timeLeft === 0) return;
    setRunning(true);
    setScore((current) => current + 1);
  };

  return (
    <div className="mini-game-card">
      <div className="mini-game-score">
        <span>Score</span>
        <strong>{score}</strong>
      </div>
      <div className="mini-game-score">
        <span>Time</span>
        <strong>{timeLeft}s</strong>
      </div>
      <button className="mini-game-main-btn" onClick={handleClick} disabled={timeLeft === 0}>
        {timeLeft === 0 ? 'Selesai' : running ? 'Tap Lagi' : 'Mulai'}
      </button>
      <button className="mini-game-reset" onClick={reset}>
        <RotateCcw size={16} /> Reset
      </button>
    </div>
  );
}

function GuessNumberGame() {
  const secretNumber = useMemo(() => Math.floor(Math.random() * 20) + 1, []);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Masukkan angka 1-20.');
  const [attempts, setAttempts] = useState(0);

  const submitGuess = () => {
    const value = Number(guess);
    if (!value || value < 1 || value > 20) {
      setMessage('Angkanya harus 1 sampai 20.');
      return;
    }

    setAttempts((current) => current + 1);
    if (value === secretNumber) {
      setMessage(`Benar. Ketemu dalam ${attempts + 1} percobaan.`);
    } else if (value < secretNumber) {
      setMessage('Terlalu kecil, naikkan.');
    } else {
      setMessage('Terlalu besar, turunkan.');
    }
  };

  return (
    <div className="mini-game-card">
      <div className="mini-game-score">
        <span>Attempts</span>
        <strong>{attempts}</strong>
      </div>
      <input
        className="mini-game-input"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        inputMode="numeric"
        placeholder="1 - 20"
      />
      <button className="mini-game-main-btn" onClick={submitGuess}>
        Tebak
      </button>
      <p className="mini-game-message">{message}</p>
    </div>
  );
}

function SuitCepatGame() {
  const choices = ['Batu', 'Gunting', 'Kertas'];
  const [result, setResult] = useState('Pilih langkah dulu.');
  const [score, setScore] = useState({ player: 0, bot: 0 });

  const play = (playerChoice: string) => {
    const botChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === botChoice) {
      setResult(`Seri. Bot pilih ${botChoice}.`);
      return;
    }

    const playerWins =
      (playerChoice === 'Batu' && botChoice === 'Gunting') ||
      (playerChoice === 'Gunting' && botChoice === 'Kertas') ||
      (playerChoice === 'Kertas' && botChoice === 'Batu');

    if (playerWins) {
      setScore((current) => ({ ...current, player: current.player + 1 }));
      setResult(`Menang. Bot pilih ${botChoice}.`);
    } else {
      setScore((current) => ({ ...current, bot: current.bot + 1 }));
      setResult(`Kalah. Bot pilih ${botChoice}.`);
    }
  };

  return (
    <div className="mini-game-card">
      <div className="mini-game-score-row">
        <div className="mini-game-score">
          <span>Kamu</span>
          <strong>{score.player}</strong>
        </div>
        <div className="mini-game-score">
          <span>Bot</span>
          <strong>{score.bot}</strong>
        </div>
      </div>
      <div className="mini-game-choice-grid">
        {choices.map((choice) => (
          <button key={choice} onClick={() => play(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <p className="mini-game-message">{result}</p>
    </div>
  );
}

function LocalGame({ gameId }: { gameId: Game['id'] }) {
  if (gameId === 'clickrush') return <ClickRushGame />;
  if (gameId === 'guess') return <GuessNumberGame />;
  if (gameId === 'rps') return <SuitCepatGame />;
  return null;
}

export function GameModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<Game>(GAMES[0]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="game-btn"
        title="Bosen? Main game dulu"
        aria-label="Open games"
      >
        <Gamepad2 size={24} />
      </button>

      {isOpen && (
        <div className="game-overlay">
          <button className="game-close-btn" onClick={() => setIsOpen(false)} aria-label="Close games">
            <X size={28} />
          </button>

          <div className="game-selector">
            {GAMES.map((game) => (
              <button
                key={game.id}
                className={`game-tab ${activeGame.id === game.id ? 'active' : ''}`}
                onClick={() => setActiveGame(game)}
              >
                {game.name}
              </button>
            ))}
          </div>

          <div className={`game-container ${activeGame.mode === 'local' ? 'mini-game-container' : ''}`}>
            {activeGame.mode === 'local' ? (
              <div className="mini-game">
                <h2>{activeGame.name}</h2>
                <p>{activeGame.desc}</p>
                <LocalGame gameId={activeGame.id} />
              </div>
            ) : (
              <iframe
                src={activeGame.url}
                className="game-iframe"
                title={activeGame.name}
                allow="autoplay; fullscreen; vr"
              ></iframe>
            )}
          </div>
          <p className="game-text">
            <strong>{activeGame.name.toUpperCase()}</strong> - {activeGame.desc}
          </p>
        </div>
      )}
    </>
  );
}
