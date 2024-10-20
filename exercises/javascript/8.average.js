function average(arr) {
  let sum = 0;
  let length = arr.length
  for (let i = 0; i < length; i++)
    sum += arr[i];

  return sum / length
}