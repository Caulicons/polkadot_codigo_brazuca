enum DiasSemana {
  Segunda = "Segunda-feira",
  Terca = "Terça-feira",
  Quarta = "Quarta-feira",
  Quinta = "Quinta-feira",
  Sexta = "Sexta-feira",
  Sabado = "Sábado",
  Domingo = "Domingo",
  feriado = "Feriado",
}

const ehFimDeSemana = (dia: DiasSemana): boolean => {
  return (
    dia === DiasSemana.Sabado ||
    dia === DiasSemana.Domingo ||
    dia === DiasSemana.feriado
  );
};

console.log(ehFimDeSemana(DiasSemana.Domingo)); // true
console.log(ehFimDeSemana(DiasSemana.Quinta)); // false
console.log(ehFimDeSemana(DiasSemana.feriado)); // true
console.log(ehFimDeSemana(DiasSemana.Segunda)); // false
