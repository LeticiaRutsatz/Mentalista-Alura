let numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  let resultadoElement = document.getElementById("resultado");
  let chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultadoElement.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    resultadoElement.innerHTML = "Digite um número de 0 á 10";
  } else {
    resultadoElement.innerHTML = "Errou, o número secreto era " + numeroSecreto;
  }
}