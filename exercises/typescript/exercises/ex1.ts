let nome: string = "Alice";
let idade: number = 25;
let ativo: boolean = true;
let hobbies: string[] = [
  "Leitura",
  "Esportes",
  "Música",
  "Basquete",
  "Futebol",
];
let endereco: { cidade: string; estado: string; pais: string; cep: string } = {
  cidade: "São Paulo",
  estado: "SP",
  pais: "Brasil",
  cep: "00000-000",
};

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);

for (let key in endereco) console.log(`${key}: ${endereco[key]}`);
