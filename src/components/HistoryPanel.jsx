import React from 'react';
import { History, Trash2 } from 'lucide-react';
import { HistoryItem } from './HistoryItem';
import { useToast } from './Toast';
import styles from './HistoryPanel.module.css';

export function HistoryPanel({ history, onDeleteItem, onClearHistory }) {
  const toast = useToast();

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your password history? This cannot be undone.')) {
      onClearHistory();
      toast.success('Password history cleared');
    }
  };

  const hasHistory = history && history.length > 0;

  return (
    <div className={styles.panelCard}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <History size={16} className={styles.icon} />
          <h3 className={styles.title}>
            History <span className={styles.counter}>({history.length})</span>
          </h3>
        </div>
        {hasHistory && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            title="Clear all history"
            aria-label="Clear all password history"
          >
            <Trash2 size={12} />
            <span>Clear</span>
          </button>
        )}
      </div>

      <div className={styles.body}>
        {hasHistory ? (
          <div className={styles.list} role="list">
            {history.map((item) => (
              <HistoryItem
                key={item.id}
                item={item}
                onDelete={onDeleteItem}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>Your generated passwords will appear here for quick access.</p>
          </div>
        )}
      </div>
    </div>
  );
}
