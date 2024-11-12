function filtrarPrecosAltos(precos: number[]): number[] {
  return precos.filter((preco) => preco > 80).map((preco) => preco * 1.2);
}

console.log(filtrarPrecosAltos([50, 150, 200, 30]));
