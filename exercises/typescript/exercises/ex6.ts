function buscarDados(): Promise<string> {
  console.log("Buscando dados...");
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dados carregados"), 4000);
  });
}
