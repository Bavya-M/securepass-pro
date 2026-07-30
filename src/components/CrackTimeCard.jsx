import React from 'react';
import { KeyRound, Tooltip } from 'antd'; // Note: keyround is in lucide, let's import it from lucide!
import { KeyRound as KeyIcon, Info } from 'lucide-react';
import styles from './CrackTimeCard.module.css';

export function CrackTimeCard({ crackTime }) {
  // Get color based on time severity
  const getColorClass = () => {
    switch (crackTime) {
      case 'Instant':
        return styles.danger;
      case 'Seconds':
        return styles.warning;
      case 'Minutes':
      case 'Hours':
        return styles.amber;
      case 'Days':
      case 'Years':
        return styles.info;
      case 'Centuries':
        return styles.success;
      default:
        return '';
    }
  };

  return (
    <div className={styles.metricCard}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <KeyIcon size={14} className={styles.icon} />
          <span className={styles.title}>Crack Time</span>
        </div>
        <Tooltip
          title={
            <div className={styles.tooltipContent}>
              <p>Estimated time required to crack this password by brute-force.</p>
              <p style={{ marginTop: 4 }}>Assumes a standard offline cracking rig executing 10 billion guesses per second.</p>
            </div>
          }
        >
          <Info size={14} className={styles.infoIcon} />
        </Tooltip>
      </div>
      <div className={styles.valueWrapper}>
        <span className={`${styles.value} ${getColorClass()}`}>{crackTime}</span>
      </div>
    </div>
  );
}
