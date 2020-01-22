// Somatório de um array

// Normal
let numeros =  [1 , 2, 3, 4];
function somatorio(array) {

    var resultado = 0;
    for(let i = 0; i < numeros.length; i++){
        resultado = numeros[i] + resultado;
    }

    return resultado;
}


// Com Reduce
let numeros =  [1 , 2, 3, 4];
let resultado = numeros.reduce(function(total, num) {
    return total + num;
}, 0);



// Reduce com arrow function
let numeros =  [1 , 2, 3, 4];
let resultado = numeros.reduce((total, num) => total + num, 0);

/* É importante passar o segundo parâmetro da função reduce, a inicialização da variáve, pois quando o array for vazio, será lançada a exceção Reduce of empty array with no initial value" */