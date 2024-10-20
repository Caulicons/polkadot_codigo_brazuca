function countOddsNumber(arr) {
  let count = 0;
  for (const numbers in arr) {
    if (numbers % 2 != 0) count++
  }

  return count
}

const res = countOddsNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(res);