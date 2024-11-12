class Animal {
  nome: string;
  som: string;

  constructor(nome: string, som: string) {
    this.nome = nome;
    this.som = som;
  }

  emitirSom(): string {
    return `${this.nome} faz ${this.som}`;
  }
}

class Cachorro extends Animal {
  raca: string;

  constructor(nome: string, som: string, raca: string) {
    super(nome, som);
    this.raca = raca;
  }

  latirForte(): string {
    return `${this.nome} faz AU AU AU!`;
  }
}
