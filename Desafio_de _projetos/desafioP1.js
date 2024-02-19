



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