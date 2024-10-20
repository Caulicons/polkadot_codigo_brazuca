const res = isPalindrome('aaa')
console.log(res);

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join("");
  return str === reversedStr
}
