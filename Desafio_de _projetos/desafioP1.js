
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




let nomeVilao = "Carlinhos";
let xpHeroi = 9500;
let lvl = ["Fraco", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal"];

switch (true) {
    case xpHeroi <= 1000:
        console.log("O heroi de nome " + nomeVilao + " está no nível " + lvl[0]);
        break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        console.log("O heroi de nome " + nomeVilao + " está no nível " + lvl[1]);
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        console.log("O heroi de nome " + nomeVilao + " está no nível " + lvl[2]);
        break;
    case xpHeroi >= 5001 && xpHeroi <= 7000:
        console.log("O heroi de nome " + nomeVilao + " está no nível " + lvl[3]);
        break;
    case xpHeroi >= 7001 && xpHeroi <= 9000:
        console.log("O heroi de nome " + nomeVilao + " está no nível " + lvl[4]);
        break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        console.log("O heroi de nome " + nomeVilao + " está no nível " + lvl[5]);
        break;
    
}