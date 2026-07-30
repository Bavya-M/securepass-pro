// Evaluate password strength based on entropy (bits)

export function evaluateStrength(entropy) {
  if (entropy === 0) {
    return {
      label: 'Weak',
      score: 0, // 0 to 4
      color: 'var(--color-danger)',
      percentage: 10,
      description: 'Please generate a password with at least one character type selected.',
    };
  }

  if (entropy < 28) {
    return {
      label: 'Weak',
      score: 0,
      color: 'var(--color-danger)',
      percentage: 20,
      description: 'Extremely vulnerable to attack. Easily brute-forced in seconds.',
    };
  } else if (entropy >= 28 && entropy < 45) {
    return {
      label: 'Fair',
      score: 1,
      color: 'var(--color-warning)',
      percentage: 40,
      description: 'Vulnerable to offline GPU dictionary/brute-force attacks.',
    };
  } else if (entropy >= 45 && entropy < 60) {
    return {
      label: 'Good',
      score: 2,
      color: '#eab308', // Amber/Yellow
      percentage: 60,
      description: 'Solid protection. Resistant to basic dictionary attacks.',
    };
  } else if (entropy >= 60 && entropy < 80) {
    return {
      label: 'Strong',
      score: 3,
      color: 'var(--color-primary)',
      percentage: 80,
      description: 'Highly secure. Resistant to standard brute-force techniques.',
    };
  } else {
    return {
      label: 'Very Strong',
      score: 4,
      color: 'var(--color-success)',
      percentage: 100,
      description: 'Cryptographically solid. Impenetrable to advanced attacks.',
    };
  }
}
