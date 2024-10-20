function factorial(n) {
  let temp = n;
  let factorial = 1
  while (temp > 0) {
    factorial *= n;
    temp--
  }
  return factorial;
}

console.log(factorial(3));
