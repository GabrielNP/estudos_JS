let lista1 = ['banana', 'laranja', 'mamão'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push(...lista2); // spread ...

console.log(lista1);
//["banana", "laranja", "mamão", "caju", "tangerina", "abacaxi"]

/* ---------------------------------------------------------------------------------------------------------- */

function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;                                            
}

let numeros = [10, 30];

console.log(somaDoisNumeros(...numeros));
