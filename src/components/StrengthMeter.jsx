import React from 'react';
import styles from './StrengthMeter.module.css';

export function StrengthMeter({ strength }) {
  const { label, score, color, description } = strength;

  // Render 5 segments (representing score 0 to 4)
  const segments = Array.from({ length: 5 }, (_, i) => {
    const isActive = i <= score;
    return (
      <div
        key={i}
        className={`${styles.segment} ${isActive ? styles.active : ''}`}
        style={{
          backgroundColor: isActive ? color : undefined,
        }}
        aria-hidden="true"
      />
    );
  });

  return (
    <div className={styles.meterContainer}>
      <div className={styles.header}>
        <span className={styles.label}>Strength</span>
        <span
          className={styles.statusLabel}
          style={{ color: score === 0 ? 'var(--color-danger)' : color }}
        >
          {label}
        </span>
      </div>
      
      <div className={styles.track}>
        {segments}
      </div>

      {description && (
        <p className={styles.explanation} style={{ borderLeftColor: color }}>
          {description}
        </p>
      )}
    </div>
  );
}
