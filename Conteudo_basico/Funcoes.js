main();

function main() {
  var a = 8;
  var b = 2;

  console.log(a, "+", b, "=", soma(a, b));
  console.log(a, "-", b, "=", subtracao(a, b));
  console.log(a, "*", b, "=", multiplicacao(a, b));
  console.log(a, "/", b, "=", divisao(a, b));
  console.log("O resto da divisão entre", a, "e", b, "é", restoDivisao(a, b));
}

function soma(a, b) {
  var res = a + b;
  return res;
}

function subtracao(a, b) {
  var res = a - b;
  return res;
}

function multiplicacao(a, b) {
  var res = a * b;
  return res;
}

function divisao(a, b) {
  var res = a / b;
  return res;
}

function restoDivisao(a, b) {
  var res = a % b;
  return res;
}
