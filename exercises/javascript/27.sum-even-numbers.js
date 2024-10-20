const res = sumEvenNumbers([1, 0, 3, 4, 5, 6, 7, 8, 9])
console.log(res);

function sumEvenNumbers(arr) {

  let sum = 0;
  for (const n of arr) {
    if (n % 2 === 0) sum += n
  }

  return sum
}
