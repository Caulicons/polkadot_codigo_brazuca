function numberExist(arr, number) {
  return arr.find(e => e === number) ? true : false
}

console.log(numberExist([1, 2, 3, 4], 4))