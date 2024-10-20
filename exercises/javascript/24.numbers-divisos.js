const res = numbersDivisors(24)
console.log(res);

function numbersDivisors(n) {
  let divisors = []
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) divisors.push(i)
  }
  return divisors

}