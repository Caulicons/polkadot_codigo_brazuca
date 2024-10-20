function isPrimeNumber(n) {
  if (n < 3 && n > 1) return true
  return n % 2 === 0 || n % 3 === 0 ? false : true
}