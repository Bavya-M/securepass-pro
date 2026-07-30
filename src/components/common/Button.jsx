import React from 'react';
import styles from './Button.module.css';

export function Button({
  children,
  variant = 'secondary', // 'primary' | 'secondary' | 'ghost' | 'danger'
  size = 'md', // 'sm' | 'md' | 'lg'
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  type = 'button',
  ariaLabel,
  ...props
}) {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={styles.icon} size={size === 'sm' ? 14 : 16} />
      )}
      {children && <span className={styles.label}>{children}</span>}
      {Icon && iconPosition === 'right' && (
        <Icon className={styles.icon} size={size === 'sm' ? 14 : 16} />
      )}
    </button>
  );
}
