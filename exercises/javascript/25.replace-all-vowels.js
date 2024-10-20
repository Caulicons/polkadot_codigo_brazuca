const res = replaceVowels('hello word !', '🥶')
console.log(res);

function replaceVowels(str, r) {
  const newString = str.replace(/[aeiou]/g, r)
  return newString
}
