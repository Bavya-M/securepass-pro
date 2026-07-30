import React from 'react';
import { Copy, Check, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';
import { useToast } from './Toast';
import styles from './PasswordDisplay.module.css';

export function PasswordDisplay({
  password,
  regenerate,
  showPassword,
  setShowPassword,
  addToHistory,
}) {
  const toast = useToast();
  const { isCopied, copy } = useClipboard();

  const handleCopy = async () => {
    if (!password) return;
    const success = await copy(password);
    if (success) {
      toast.success('Password copied to clipboard');
      // Add to history when copied, if it's not already logged
      if (addToHistory) {
        addToHistory(password);
      }
    } else {
      toast.error('Failed to copy password');
    }
  };

  const handleRegenerate = () => {
    regenerate();
    toast.info('New password generated');
  };

  const isPasswordEmpty = !password;

  return (
    <div className={styles.displayContainer}>
      <div className={styles.inputWrapper}>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password || ''}
          placeholder={isPasswordEmpty ? 'Select at least one option...' : 'Generated password'}
          readOnly
          className={styles.passwordInput}
          aria-label="Generated password"
          aria-placeholder="Select at least one option"
        />
        
        <div className={styles.actionGroup}>
          <button
            type="button"
            className={styles.actionButton}
            onClick={() => setShowPassword(!showPassword)}
            disabled={isPasswordEmpty}
            title={showPassword ? 'Hide password' : 'Show password'}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>

          <button
            type="button"
            className={`${styles.actionButton} ${isCopied ? styles.copied : ''}`}
            onClick={handleCopy}
            disabled={isPasswordEmpty}
            title="Copy to clipboard"
            aria-label="Copy to clipboard"
          >
            {isCopied ? <Check size={16} className={styles.successIcon} /> : <Copy size={16} />}
          </button>

          <button
            type="button"
            className={styles.actionButton}
            onClick={handleRegenerate}
            disabled={isPasswordEmpty && regenerate}
            title="Regenerate password"
            aria-label="Regenerate password"
          >
            <RefreshCw size={16} className={styles.rotateIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
