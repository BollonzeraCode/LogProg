const input = require("fs").readFileSync("./input/input.txt", "UTF-8");
const lines = input.split("\n");

let pecas = [
  {
    codigo: Number(lines[0]),
    qtd: Number(lines[1]),
    valorUnit: Number(lines[2]),
  },
  {
    codigo: Number(lines[3]),
    qtd: Number(lines[4]),
    valorUnit: Number(lines[5]),
  },
];

let totalPecas = 0;
for (let peca of pecas) {
  let qtd = peca.qtd;
  let valorUnit = peca.valorUnit;

  let valor = valorUnit.toFixed(2) * qtd.toFixed(2);

  totalPecas = totalPecas + valor;
}

console.log("VALOR A PAGAR: R$ " + totalPecas.toFixed(2));
