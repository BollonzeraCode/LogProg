let funcionario = {
  nome: "JOAO",
  salario: 500.0,
  valorVendas: 1230.3,
};

let bonus = (funcionario.valorVendas * 15) / 100;
let salarioMes = funcionario.salario + bonus;

console.log("TOTAL = R$ " + salarioMes.toFixed(2));
