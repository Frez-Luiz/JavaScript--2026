
let nota1 = 6;
let nota2 = 5;
let nota3 = 4;

const nomeAluno = "Bruno Wigers";

let media = (nota1 + nota2 + nota3) / 3;


if (media >= 7){
  console.log("O aluno " + nomeAluno + " está aprovado.")
}
if(media >= 5 && media < 7 ){
  console.log("O aluno " + nomeAluno + " está no SE LIGA. ")
}
{
if (media < 5){
  console.log("O aluno " + nomeAluno + " está reprovado.")
}
}

console.log("O aluno: " + nomeAluno);
console.log("Tem a média: " + media);

