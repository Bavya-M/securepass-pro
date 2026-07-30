import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import styles from './Toast.module.css';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message, type = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto dismiss after 2.5s
    setTimeout(() => {
      removeToast(id);
    }, 2500);
  }, [removeToast]);

  const toast = useMemo(() => ({
    success: (msg) => addToast(msg, 'success'),
    error: (msg) => addToast(msg, 'error'),
    info: (msg) => addToast(msg, 'info'),
    warning: (msg) => addToast(msg, 'warning'),
  }), [addToast]);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className={styles.container} aria-live="assertive">
        {toasts.map((t) => {
          let Icon = Info;
          let typeClass = styles.info;

          if (t.type === 'success') {
            Icon = CheckCircle2;
            typeClass = styles.success;
          } else if (t.type === 'error') {
            Icon = AlertCircle;
            typeClass = styles.error;
          } else if (t.type === 'warning') {
            Icon = AlertCircle;
            typeClass = styles.warning;
          }

          return (
            <div key={t.id} className={`${styles.toast} ${typeClass}`}>
              <Icon size={16} className={styles.icon} />
              <span className={styles.message}>{t.message}</span>
              <button
                className={styles.closeButton}
                onClick={() => removeToast(t.id)}
                aria-label="Close notification"
              >
                <X size={14} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
