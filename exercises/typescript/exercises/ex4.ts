function calcularMedia(numeros: number[]): number {
  const total = numeros.reduce((acc, numero) => acc + numero, 0);
  return total / numeros.length;
}

console.log(calcularMedia([10, 20, 30, 40])); // 25
console.log(calcularMedia([-10, 20, 10.5, 40, 50])); // 22.5
