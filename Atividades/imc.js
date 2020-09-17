var pessoa = {
  nome: "Guimas",
  peso: 60,
  altura: 1.64,
};

var imcRes = imc(pessoa.peso, pessoa.altura);

if (imcRes <= 16.9) {
  console.log(
    pessoa.nome,
    ", o seu imc é: ",
    imcRes,
    "e voce está Muito abaixo do peso"
  );
} else if (imcRes >= 17 && imcRes <= 18.4) {
  console.log(
    pessoa.nome,
    ", o seu imc é: ",
    imcRes,
    "e voce está Abaixo do peso"
  );
} else if (imcRes >= 18.5 && imcRes <= 24.9) {
  console.log(
    pessoa.nome,
    ", o seu imc é: ",
    imcRes,
    "e voce está no seu peso ideal"
  );
} else if (imcRes >= 25 && imcRes <= 29.9) {
  console.log(
    pessoa.nome,
    ", o seu imc é: ",
    imcRes,
    "e voce está Acima do peso"
  );
} else if (imcRes >= 30 && imcRes <= 34.9) {
  console.log(
    pessoa.nome,
    ", o seu imc é: ",
    imcRes,
    "e voce está Obeso grau I"
  );
} else if (imcRes >= 35 && imcRes <= 40) {
  console.log(
    pessoa.nome,
    ", o seu imc é: ",
    imcRes,
    "e voce está Obeso grau II"
  );
} else {
  console.log(
    pessoa.nome,
    ", o seu imc é: ",
    imcRes,
    "e voce está Obeso grau III"
  );
}

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
