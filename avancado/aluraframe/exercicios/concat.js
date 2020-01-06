function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}


let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
exibeNoConsole(listaDeNomes1);
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole(listaDeNomes2);

// Para evitar de chamarmos a função duas vezes, uma vez para cada lista, podemos juntar uma lista na outra. 
// Implemente o código que cria uma nova lista que é a junção dos elementos de listaDeNomes1 e listaDeNomes2.


function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = [];

listaDeNomes1.forEach(item => lista.push(item));
listaDeNomes2.forEach(item => lista.push(item));

exibeNoConsole(lista);

// Ao invés de incrementar dois arrays em um terceiro, podemos usar o método concat:

let lista = listaDeNomes1.concat(listaDeNomes2);

exibeNoConsole(lista);

// Para enxugar mais usando uma variável a menos, podemos realizar o jeito acima direto no parâmetro da função ao invés de alocar em uma variável:

exibeNoConsole([].concat(listaDeNomes1, listaDeNomes));

