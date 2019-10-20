let numeros = [3,2,11,20,8,7];

let novosNumeros = [];

numeros.forEach(item => {
    if (item % 2 !=  0) {
        novosNumeros.push(item * 2);
    } else {
        novosNumeros.push(item);
    }
});

console.log(novosNumeros);

/* Para conseguir o mesmo resultado acima: */

let numeros = [3,2,11,20,8,7];

let novosNumeros = numeros.map((item) => item % 2 ? item * 2 : item);

console.log(novosNumeros);