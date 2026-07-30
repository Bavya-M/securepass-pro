import React from 'react';
import styles from './Section.module.css';

export function Section({
  children,
  title,
  subtitle,
  className = '',
  ...props
}) {
  return (
    <section className={`${styles.section} ${className}`} {...props}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
