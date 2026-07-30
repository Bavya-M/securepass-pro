import React, { useState } from 'react';
import { Copy, Check, Trash2, Eye, EyeOff } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';
import { useToast } from './Toast';
import styles from './HistoryItem.module.css';

export function HistoryItem({ item, onDelete }) {
  const { password, timestamp, id } = item;
  const [show, setShow] = useState(false);
  const toast = useToast();
  const { isCopied, copy } = useClipboard();

  const handleCopy = async () => {
    const success = await copy(password);
    if (success) {
      toast.success('Password copied from history');
    }
  };

  const getRelativeTime = (time) => {
    const elapsed = Date.now() - time;
    const seconds = Math.floor(elapsed / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return new Date(time).toLocaleDateString();
  };

  return (
    <div className={styles.historyItem} role="listitem">
      <div className={styles.passwordWrapper}>
        <span className={styles.passwordText} style={{ fontFamily: show ? 'monospace' : 'inherit' }}>
          {show ? password : '••••••••••••••••'}
        </span>
        <span className={styles.time}>{getRelativeTime(timestamp)}</span>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => setShow(!show)}
          title={show ? 'Hide password' : 'Show password'}
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <EyeOff size={14} /> : <Eye size={14} />}
        </button>

        <button
          type="button"
          className={`${styles.iconButton} ${isCopied ? styles.copied : ''}`}
          onClick={handleCopy}
          title="Copy password"
          aria-label="Copy password"
        >
          {isCopied ? <Check size={14} className={styles.successIcon} /> : <Copy size={14} />}
        </button>

        <button
          type="button"
          className={`${styles.iconButton} ${styles.delete}`}
          onClick={() => onDelete(id)}
          title="Delete from history"
          aria-label="Delete from history"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}
