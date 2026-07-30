import React from 'react';
import { Tooltip } from 'antd';
import { Info, Gauge } from 'lucide-react';
import styles from './EntropyCard.module.css';

export function EntropyCard({ entropy }) {
  return (
    <div className={styles.metricCard}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <Gauge size={14} className={styles.icon} />
          <span className={styles.title}>Entropy</span>
        </div>
        <Tooltip
          title={
            <div className={styles.tooltipContent}>
              <p>Entropy measures a password's randomness in bits.</p>
              <p style={{ marginTop: 4 }}>Formula: E = L &times; log₂(R) where L is length and R is the character pool size.</p>
              <p style={{ marginTop: 4 }}>Values over 60 are recommended for standard accounts. Over 80 is virtually unbreakable.</p>
            </div>
          }
        >
          <Info size={14} className={styles.infoIcon} />
        </Tooltip>
      </div>
      <div className={styles.valueWrapper}>
        <span className={styles.value}>{entropy}</span>
        <span className={styles.unit}>bits</span>
      </div>
    </div>
  );
}
