import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <div className={styles.segmentedControl} role="radiogroup" aria-label="Theme selector">
      <button
        type="button"
        className={`${styles.segment} ${theme === 'light' ? styles.active : ''}`}
        onClick={() => setTheme('light')}
        role="radio"
        aria-checked={theme === 'light'}
        aria-label="Light mode"
        title="Light theme"
      >
        <Sun size={14} />
      </button>
      
      <button
        type="button"
        className={`${styles.segment} ${theme === 'dark' ? styles.active : ''}`}
        onClick={() => setTheme('dark')}
        role="radio"
        aria-checked={theme === 'dark'}
        aria-label="Dark mode"
        title="Dark theme"
      >
        <Moon size={14} />
      </button>
      
      <button
        type="button"
        className={`${styles.segment} ${theme === 'system' ? styles.active : ''}`}
        onClick={() => setTheme('system')}
        role="radio"
        aria-checked={theme === 'system'}
        aria-label="System preference"
        title="Use system setting"
      >
        <Laptop size={14} />
      </button>
    </div>
  );
}
