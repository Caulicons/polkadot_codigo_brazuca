const res = randomNumber()
console.log(res);

function randomNumber() {
  return (Math.random() * 100).toPrecision(2)
}