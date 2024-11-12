function formatarEntrada(
  valor: string | number | boolean
): string | number | boolean {
  return typeof valor === "string"
    ? valor.toUpperCase()
    : typeof valor === "number"
    ? valor * 10
    : valor;
}
