const res = multiplyListElements([1, 0, 3, 4, 5, 6, 7, 8, 9], 3)
console.log(res);

function multiplyListElements(list, multiplier) {

  for (let i = 0; i < list.length; i++) {
    temp = list[i]
    list[i] = temp * multiplier
  }
  return list
}