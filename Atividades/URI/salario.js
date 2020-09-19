let funcionario = {
  numero: 25,
  numHorasTrab: 100,
  valHora: 5.5,
};

let salario = funcionario.valHora.toFixed(2) * funcionario.numHorasTrab;

console.log("NUMBER = " + funcionario.numero);
console.log("SALARY = U$ " + salario.toFixed(2));
