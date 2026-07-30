import React from 'react';
import { Lock } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.securityNote}>
        <Lock size={12} className={styles.icon} />
        <span>Fully client-side. No passwords or preferences are ever sent to any server.</span>
      </div>
      <div className={styles.links}>
        <span>&copy; {new Date().getFullYear()} SecurePass Pro</span>
        <span className={styles.divider}>&bull;</span>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
          GitHub
        </a>
      </div>
    </footer>
  );
}
