function countVogais(str) {
  let count = 0

  for (const l of str) {
    if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u')
      count++
  }
  return count
}

