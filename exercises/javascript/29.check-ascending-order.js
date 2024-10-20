const res = checkAscendingOrder([1, 0, 3, 4, 5, 6, 7, 8, 9])
console.log(res);

function checkAscendingOrder(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false
  }
  return true
}