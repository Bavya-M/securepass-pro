// Estimate cracking duration based on entropy

export function estimateCrackTime(entropy) {
  if (entropy === 0) return 'Instant';

  // Number of combinations
  const combinations = Math.pow(2, entropy);
  
  // Assume a fast GPU cluster doing 10 billion (10^10) guesses/sec
  const guessesPerSecond = 1e10;
  
  // Average guesses needed is half the key space
  const seconds = (combinations / 2) / guessesPerSecond;

  if (seconds < 0.1) {
    return 'Instant';
  }
  if (seconds < 60) {
    return 'Seconds';
  }
  
  const minutes = seconds / 60;
  if (minutes < 60) {
    return 'Minutes';
  }
  
  const hours = minutes / 60;
  if (hours < 24) {
    return 'Hours';
  }
  
  const days = hours / 24;
  if (days < 365) {
    return 'Days';
  }
  
  const years = days / 365;
  if (years < 100) {
    return 'Years';
  }
  
  return 'Centuries';
}
