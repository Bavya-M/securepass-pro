import { useState, useCallback, useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { generatePassword } from '../utils/passwordGenerator';
import { calculateEntropy } from '../utils/entropy';
import { evaluateStrength } from '../utils/strength';
import { estimateCrackTime } from '../utils/timeEstimator';

const DEFAULT_SETTINGS = {
  length: 16,
  useUppercase: true,
  useLowercase: true,
  useNumbers: true,
  useSymbols: true,
  excludeAmbiguous: false,
  preventDuplicates: false,
  requireAllSelected: true,
};

export function usePassword() {
  const [settings, setSettings] = useLocalStorage('securepass-settings', DEFAULT_SETTINGS);
  const [password, setPassword] = useState('');
  const [history, setHistory] = useLocalStorage('securepass-history', []);
  const [showPassword, setShowPassword] = useState(false);
  
  // Track settings changes vs button click generations for history management
  const isInitialOrConfigChange = useRef(true);

  const updateSetting = useCallback((key, value) => {
    isInitialOrConfigChange.current = true;
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, [setSettings]);

  // Method to push a password to history with deduplication and size cap
  const addToHistory = useCallback((pwd) => {
    if (!pwd) return;
    setHistory((prev) => {
      // Remove any existing copy of this password to move it to the top
      const filtered = prev.filter((item) => item.password !== pwd);
      const newItem = {
        id: window.crypto.randomUUID ? window.crypto.randomUUID() : Math.random().toString(36).substring(2, 11),
        password: pwd,
        timestamp: Date.now(),
      };
      return [newItem, ...filtered].slice(0, 10);
    });
  }, [setHistory]);

  const regenerate = useCallback(() => {
    isInitialOrConfigChange.current = false;
    const newPassword = generatePassword(settings);
    setPassword(newPassword);
    setShowPassword(false);
    addToHistory(newPassword);
  }, [settings, addToHistory]);

  // Automatically generate password on settings changes (without filling history)
  useEffect(() => {
    if (isInitialOrConfigChange.current) {
      const newPassword = generatePassword(settings);
      setPassword(newPassword);
      setShowPassword(false);
    }
  }, [settings]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, [setHistory]);

  const deleteHistoryItem = useCallback((id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  }, [setHistory]);

  const entropy = calculateEntropy(password.length, settings);
  const strength = evaluateStrength(entropy);
  const crackTime = estimateCrackTime(entropy);

  return {
    password,
    settings,
    updateSetting,
    regenerate,
    history,
    addToHistory, // Expose so copy actions can push to history if not there
    clearHistory,
    deleteHistoryItem,
    entropy,
    strength,
    crackTime,
    showPassword,
    setShowPassword,
  };
}
