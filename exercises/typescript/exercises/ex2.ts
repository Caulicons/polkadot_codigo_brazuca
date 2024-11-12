function saudacao(nome: string, idade?: number): string {
  return idade ? `Olá, ${nome}! Você tem ${idade} anos.` : `Olá, ${nome}!`;
}

console.log(saudacao("Alice"));
