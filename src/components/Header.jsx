import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logoWrapper}>
          <ShieldCheck className={styles.logo} size={22} />
        </div>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>SecurePass Pro</h1>
          <span className={styles.badge}>v1.0</span>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}
