const res = characterAppears("batatabadgfa", "a")
console.log(res);

function characterAppears(str, char) {

  return str.split('').reduce((sum, c) => c === char ? sum + 1 : sum, 0,)
}