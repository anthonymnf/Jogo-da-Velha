const casas = document.getElementsByClassName("casas");
const btnReiniciar = document.getElementById("reiniciar");
const labelJogador = document.getElementById("jogador");

//Definindo variáveis de estado do jogo
var jogador = " "; //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O)
var vencedor = " "; //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O)

function sortearJogador() {
  if (Math.floor(Math.random() * 3) == 0) {
    jogador = "O";
    labelJogador.innerText = "O";
    labelJogador.style.color = "#00f";
  } else {
    jogador = "X";
    labelJogador.innerText = "X";
    labelJogador.style.color = "#F00";
  }
}

function trocarJogador() {
  if (jogador == "X") {
    jogador = "O";
    labelJogador.innerText = "O";
    labelJogador.style.color = "#00f";
  } else {
    jogador = "X";
    labelJogador.innerText = "X";
    labelJogador.style.color = "#f00";
  }
}

btnReiniciar.addEventListener("click", (ev) => {
  for (let i = 0; i < 9; i++) {
    casas[i].value = " ";
    casas[i].style.backgroundColor = "#ddd";
  }
  sortearJogador();
  vencedor = " ";
  document.getElementById("win").innerText = " ";
});

function vitoria() {
  if (
    casas[0].value == casas[1].value &&
    casas[1].value == casas[2].value &&
    casas[0].value != " "
  ) {
    casas[0].style.backgroundColor = "#25a340";
    casas[1].style.backgroundColor = "#25a340";
    casas[2].style.backgroundColor = "#25a340";

    return casas[0].value;
  } else if (
    casas[3].value == casas[4].value &&
    casas[4].value == casas[5].value &&
    casas[3].value !== " "
  ) {
    casas[3].style.backgroundColor = "#25a340";
    casas[4].style.backgroundColor = "#25a340";
    casas[5].style.backgroundColor = "#25a340";

    return casas[3].value;
  } else if (
    casas[6].value == casas[7].value &&
    casas[7].value == casas[8].value &&
    casas[6].value != " "
  ) {
    casas[6].style.backgroundColor = "#25a340";
    casas[7].style.backgroundColor = "#25a340";
    casas[8].style.backgroundColor = "#25a340";

    return casas[6].value;
  } else if (
    casas[0].value == casas[3].value &&
    casas[3].value == casas[6].value &&
    casas[0].value != " "
  ) {
    casas[0].style.backgroundColor = "#25a340";
    casas[3].style.backgroundColor = "#25a340";
    casas[6].style.backgroundColor = "#25a340";

    return casas[0].value;
  } else if (
    casas[1].value == casas[4].value &&
    casas[4].value == casas[7].value &&
    casas[1].value != " "
  ) {
    casas[1].style.backgroundColor = "#25a340";
    casas[7].style.backgroundColor = "#25a340";
    casas[4].style.backgroundColor = "#25a340";

    return casas[1].value;
  } else if (
    casas[2].value == casas[5].value &&
    casas[5].value == casas[8].value &&
    casas[2].value != " "
  ) {
    casas[2].style.backgroundColor = "#25a340";
    casas[5].style.backgroundColor = "#25a340";
    casas[8].style.backgroundColor = "#25a340";

    return casas[2].value;
  } else if (
    casas[0].value == casas[4].value &&
    casas[4].value == casas[8].value &&
    casas[0].value != " "
  ) {
    casas[0].style.backgroundColor = "#25a340";
    casas[4].style.backgroundColor = "#25a340";
    casas[8].style.backgroundColor = "#25a340";

    return casas[0].value;
  } else if (
    casas[2].value == casas[4].value &&
    casas[4].value == casas[6].value &&
    casas[2].value != " "
  ) {
    casas[2].style.backgroundColor = "#25a340";
    casas[4].style.backgroundColor = "#25a340";
    casas[6].style.backgroundColor = "#25a340";

    return casas[2].value;
  }
  return " ";
}

for (let i = 0; i < 9; i++) {
  casas[i].addEventListener("click", (event) => {
    if (event.target.value == " " && vencedor == " ") {
      event.target.value = jogador;
      vencedor = vitoria();
      trocarJogador();
      if (vencedor != " ") {
        document.getElementById("win").innerText =
          "O jogador " + vencedor + " venceu!";
      }
    }
  });
}
