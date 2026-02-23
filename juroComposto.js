function juroComposto (capital, taxaMensal, meses){
    let montante = capital * (1 + (taxaMensal /100)) ** meses;

    return montante;
}

let conta01 = juroComposto(100, 2, 10);
console.log("Montante final R$: " + conta01.toFixed(2));