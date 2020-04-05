let funcionario = {email: 'abc@abc.com'};

// imprima a mensagem "Armadilha aqui!", além disso, modifique o retorno do getter, fazendo-o retornar o email, começando e terminando com dois asteriscos.


let funcionarioProxy = new Proxy(funcionario,  {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        return '**' + Reflect.get(target, prop, receiver) + '**' ;        
    }

});
console.log(funcionarioProxy.email);

// podemos evitar a declaração da variável funcionarioProxy desta forma:

funcionario = new Proxy({email: 'abc@abc.com'},  {

    get(target, prop, receiver) {
        console.log('Armadilha aqui!');
        return '**' + Reflect.get(target, prop, receiver) + '**' ;        
    }

});
console.log(funcionario.email);