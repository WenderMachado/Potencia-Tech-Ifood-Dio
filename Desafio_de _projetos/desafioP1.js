
//Aqui o primeiro desafio:

//Instruções para entrega}
// # 1️ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**" //

//usei a estrutura de decisão switch case e vetores para re resolver o desafio.//




let nomeHeroi = ""
let xpHeroi = 0
let lvl = [
  "Fraco",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
]

do {
  nomeHeroi = prompt("Insira o nome do herói");
  xpHeroi = parseInt(prompt("Insira o XP do herói"), 10)

  if (xpHeroi <= 1000) {
    alert("O herói de nome " + nomeHeroi + " está no nível " + lvl[0])
  } else if (xpHeroi <= 2000) {
    alert("O herói de nome " + nomeHeroi + " está no nível " + lvl[1])
  } else if (xpHeroi <= 5000) {
    alert("O herói de nome " + nomeHeroi + " está no nível " + lvl[2])
  } else if (xpHeroi <= 7000) {
    alert("O herói de nome " + nomeHeroi + " está no nível " + lvl[3])
  } else if (xpHeroi <= 9000) {
    alert("O herói de nome " + nomeHeroi + " está no nível " + lvl[4])
  } else if (xpHeroi <= 10000) {
    alert("O herói de nome " + nomeHeroi + " está no nível " + lvl[5])
  } else {
    alert("O herói de nome " + nomeHeroi + " está no nível " + lvl[6])
  }
} while (xpHeroi <= 10002)

alert(xpHeroi)


