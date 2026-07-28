import React from 'react';
import styles from './sections.module.css';

export function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <p className={styles.footerText}>&copy; {new Date().getFullYear()} Raffa Rizqi. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="https://x.com/RaffaRizqi02" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>X (Twitter)</a>
            <a href="https://www.linkedin.com/in/raffa-rizki-95ab66373?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
            <a href="https://www.instagram.com/raffa.r07" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
