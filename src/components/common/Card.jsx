import React from 'react';
import styles from './Card.module.css';

export function Card({
  children,
  title,
  subtitle,
  headerAction,
  noPadding = false,
  className = '',
  ...props
}) {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {(title || subtitle || headerAction) && (
        <div className={styles.header}>
          <div className={styles.headerText}>
            {title && <h3 className={styles.title}>{title}</h3>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {headerAction && <div className={styles.action}>{headerAction}</div>}
        </div>
      )}
      <div className={noPadding ? '' : styles.body}>
        {children}
      </div>
    </div>
  );
}
