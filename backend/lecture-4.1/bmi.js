const readline = require("readline-sync");

const weight = readline.questionFloat('Whats your weight?');
const height = readline.questionFloat('Whats your height?');

const imc = (peso, altura) => {
    const imcResult =  peso/(altura^2);

    switch (true) {
      case imcResult < 18.5:
      return "Abaixo do peso (magreza)";
      case imcResult >= 18.5 && imcResult <= 24.9:
        return "Peso normal";
      case imcResult >= 25 && imcResult <= 29.9:
        return "Acima do peso (sobrepeso)";
      case imcResult >= 30 && imcResult <= 34.9:
        return "Obesidade grau I";
      case imcResult >= 35 && imcResult <= 39.9:
        return "Obesidade grau II";
      default:
        return "Obesidade graus III e IV";
    }
};

console.log(imc(weight, height));
