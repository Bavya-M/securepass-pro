// Cryptographically secure password generator using Web Crypto API

const UPPERCASE_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_POOL = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS_POOL = '0123456789';
const SYMBOLS_POOL = '!@#$%^&*()_+-=[]{}|;:\',./<>?';
const AMBIGUOUS_CHARS = ['i', 'I', 'l', 'L', '1', 'o', 'O', '0', '|', '`', '\''];

// Get unbiased secure random integer in range [0, max)
function getSecureRandomInt(max) {
  if (max <= 1) return 0;
  const array = new Uint32Array(1);
  const maxSafe = Math.floor(4294967296 / max) * max;
  
  let val;
  do {
    window.crypto.getRandomValues(array);
    val = array[0];
  } while (val >= maxSafe);
  
  return val % max;
}

// Shuffle helper
function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = getSecureRandomInt(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generatePassword({
  length = 16,
  useUppercase = true,
  useLowercase = true,
  useNumbers = true,
  useSymbols = true,
  excludeAmbiguous = false,
  preventDuplicates = false,
  requireAllSelected = true,
}) {
  // Build categories list
  const categories = [];
  if (useUppercase) categories.push({ name: 'uppercase', pool: UPPERCASE_POOL });
  if (useLowercase) categories.push({ name: 'lowercase', pool: LOWERCASE_POOL });
  if (useNumbers) categories.push({ name: 'numbers', pool: NUMBERS_POOL });
  if (useSymbols) categories.push({ name: 'symbols', pool: SYMBOLS_POOL });

  if (categories.length === 0) {
    return '';
  }

  // Filter pools based on exclusion of ambiguous characters
  const activeCategories = categories.map(cat => {
    let filteredPool = cat.pool;
    if (excludeAmbiguous) {
      filteredPool = filteredPool
        .split('')
        .filter(char => !AMBIGUOUS_CHARS.includes(char))
        .join('');
    }
    return { ...cat, pool: filteredPool };
  }).filter(cat => cat.pool.length > 0);

  if (activeCategories.length === 0) {
    return '';
  }

  // Combine full active pool
  let fullPool = activeCategories.map(cat => cat.pool).join('');
  
  // Clean duplicate pool characters if any
  fullPool = Array.from(new Set(fullPool.split(''))).join('');

  // Handle preventDuplicates constraint
  let targetLength = length;
  if (preventDuplicates) {
    targetLength = Math.min(length, fullPool.length);
  }

  if (targetLength <= 0) return '';

  let passwordChars = [];

  // If requireAllSelected is checked, guarantee at least one from each active category
  if (requireAllSelected && activeCategories.length <= targetLength) {
    // Phase 1: Take 1 character from each category
    activeCategories.forEach(cat => {
      const idx = getSecureRandomInt(cat.pool.length);
      passwordChars.push(cat.pool[idx]);
    });

    // Phase 2: Fill the remaining length from the full pool
    let remainingLength = targetLength - passwordChars.length;
    let poolForFilling = fullPool;

    if (preventDuplicates) {
      // Must filter out characters already added
      poolForFilling = fullPool
        .split('')
        .filter(char => !passwordChars.includes(char))
        .join('');
    }

    for (let i = 0; i < remainingLength; i++) {
      if (poolForFilling.length === 0) break;
      const idx = getSecureRandomInt(poolForFilling.length);
      const chosenChar = poolForFilling[idx];
      passwordChars.push(chosenChar);
      
      if (preventDuplicates) {
        poolForFilling = poolForFilling.slice(0, idx) + poolForFilling.slice(idx + 1);
      }
    }

    // Shuffle the final list to hide pre-allocated positions
    passwordChars = shuffleArray(passwordChars);
  } else {
    // Normal random generation
    let poolForFilling = fullPool;
    for (let i = 0; i < targetLength; i++) {
      if (poolForFilling.length === 0) break;
      const idx = getSecureRandomInt(poolForFilling.length);
      const chosenChar = poolForFilling[idx];
      passwordChars.push(chosenChar);
      
      if (preventDuplicates) {
        poolForFilling = poolForFilling.slice(0, idx) + poolForFilling.slice(idx + 1);
      }
    }
  }

  return passwordChars.join('');
}
