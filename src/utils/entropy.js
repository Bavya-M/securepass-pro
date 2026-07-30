// Calculate password entropy in bits: E = L * log2(R)
// Where L is length, R is active pool size.

export function calculateEntropy(length, {
  useUppercase,
  useLowercase,
  useNumbers,
  useSymbols,
  excludeAmbiguous,
}) {
  if (length <= 0) return 0;

  let poolSize = 0;
  if (useUppercase) {
    // 26 chars minus 'I', 'L', 'O' = 23
    poolSize += excludeAmbiguous ? 23 : 26;
  }
  if (useLowercase) {
    // 26 chars minus 'i', 'l', 'o' = 23
    poolSize += excludeAmbiguous ? 23 : 26;
  }
  if (useNumbers) {
    // 10 chars minus '0', '1' = 8
    poolSize += excludeAmbiguous ? 8 : 10;
  }
  if (useSymbols) {
    // 29 symbols minus '|', '`', '\'' = 26
    poolSize += excludeAmbiguous ? 26 : 29;
  }

  if (poolSize === 0) return 0;

  const entropy = length * Math.log2(poolSize);
  return parseFloat(entropy.toFixed(1));
}
