const res = sumDigits(27);
console.log(res);

function sumDigits(n) {
  return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
}
