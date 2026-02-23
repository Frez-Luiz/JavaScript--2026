function calculaIMC(peso, altura){
    let imc = peso / (altura ** 2);

    console.log("Seu IMC é, " + imc.toFixed (2));

    if (imc < 18.5){
        console.log("Classificação: Abaixo do Peso");
    }
    else if (imc >= 18.5 && imc <= 24.9){
        console.log("Classificação: Peso Normal");
    }
    else if (imc >= 25 && imc <=29.9){
        console.log("Classificação: Sobrepeso");
    }
    else {
        console.log("Classificação: Obesidade");
    }
}
calculaIMC(66, 1.77);