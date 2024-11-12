function reverterArray<T>(items: T[]): T[] {
  return items.reverse();
}

console.log(reverterArray([1, 2, 3])); // [3, 2, 1]
console.log(reverterArray(["a", "b", "c"])); // ["c", "b", "a"]
console.log(reverterArray([1, "a", 2, "b", 3, "c"])); // ["c", 3, "b", 2, "a", 1]
console.log(reverterArray([1, 2, 3].filter((item) => item > 1))); // [3, 2]
console.log(reverterArray([1, 2, 3].map((item) => item * 2))); // [6, 4, 2]
