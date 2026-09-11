'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import styles from './Navbar.module.css';
import { Magnetic } from './Magnetic';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: isScrolled || isMenuOpen ? '#f8f6f0' : 'transparent',
        borderBottom: isScrolled ? '2.5px solid #121316' : '2.5px solid transparent',
      }}
    >
      <a href="#" className={styles.logo}>
        RAFFA<span style={{ color: '#f59e0b' }}>.</span>
      </a>
      <div className={styles.navLinks}>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#portfolio" className={styles.navLink}>Portfolio</a>
        <a href="/rebaflix" className={styles.navLinkSpecial}>
          <Smartphone size={14} /> RebaFlix APK
        </a>
        <a href="#hire" className={styles.navLink}>Hire Me</a>
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </div>
      
      <div className={styles.navRight}>
        <div className={styles.desktopOnly}>
          <Magnetic>
            <a href="#contact" className={styles.button}>Let&apos;s Talk</a>
          </Magnetic>
        </div>
        <button className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#portfolio" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="/rebaflix" className={styles.mobileLinkSpecial} onClick={() => setIsMenuOpen(false)}>
            <Smartphone size={16} /> RebaFlix APK (Download Gratis)
          </a>
          <a href="#hire" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Hire Me</a>
          <a href="#services" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" className={styles.button} onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', justifyContent: 'center' }}>Let&apos;s Talk</a>
        </div>
      )}
    </nav>
  );
}
