function gerarInteiro(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let nota1 = gerarInteiro(1, 10);
let nota2 = gerarInteiro(1, 10);
let nota3 = gerarInteiro(1, 10);

const nomeAluno = "Bruno Wigers";

let media = (nota1 + nota2 + nota3) / 3;

console.log("O aluno: " + nomeAluno);
console.log("Tem a média: " + media);


