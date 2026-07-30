import { useState, useCallback } from 'react';
import { copyToClipboard } from '../utils/clipboard';

export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async (text, onSuccess) => {
    if (!text) return false;
    const success = await copyToClipboard(text);
    if (success) {
      setIsCopied(true);
      if (onSuccess) onSuccess();
      setTimeout(() => setIsCopied(false), 2000);
    }
    return success;
  }, []);

  return { isCopied, copy };
}
