const res = areMultiples(27, 19);
console.log(res);

function areMultiples(n1, n2) {
  return n1 / n2 === 0 || n2 / n1 === 0
}
