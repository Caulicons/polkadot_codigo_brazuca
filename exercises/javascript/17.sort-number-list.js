const res = sortNumbers([27, 19, 14, 89, 37, 49]);
console.log(res);

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b)
}
