const readline = require('readline-sync');


let nomeHeroi = readline.question("Digite o nome de seu Herói: ")
let pontosXP = readline.question("Digite uma quantidade de XP:  ");



if (pontosXP < 100){
    categoria = "Iniciante";
}else if (pontosXP < 500){
    categoria = "Guerreiro";
}else if(pontosXP < 1000){
    categoria = "Mestre";
}else{
    categoria = "Farmer Aura";
}

console.log(`O herói ${nomeHeroi} possui ${pontosXP} de experiência e seu rank atual é: ${categoria}`);