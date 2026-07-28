'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { Magnetic } from './Magnetic';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar} style={{
      backgroundColor: isScrolled || isMenuOpen ? 'rgba(5, 12, 18, 0.84)' : 'transparent',
      backdropFilter: isScrolled || isMenuOpen ? 'blur(12px)' : 'none',
      borderBottom: isScrolled || isMenuOpen ? '1px solid rgba(148, 163, 184, 0.16)' : '1px solid transparent',
      boxShadow: isScrolled || isMenuOpen ? '0 18px 60px -44px rgba(0, 0, 0, 0.8)' : 'none'
    }}>
      <a href="#" className={styles.logo}>
        Raffa<span style={{ color: '#22c55e' }}>.</span>
      </a>
      <div className={styles.navLinks}>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#portfolio" className={styles.navLink}>Portfolio</a>
        <a href="#hire" className={styles.navLink}>Hire Me</a>
        <a href="#services" className={styles.navLink}>Services</a>
      </div>
      
      <div className={styles.navRight}>
        <div className={styles.desktopOnly}>
          <Magnetic>
            <a href="#hire" className={styles.button} style={{ display: 'inline-block' }}>Hire Me</a>
          </Magnetic>
        </div>
        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#portfolio" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#hire" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Hire Me</a>
          <a href="#services" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" className={styles.button} onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', justifyContent: 'center' }}>Contact</a>
        </div>
      )}
    </nav>
  );
}
