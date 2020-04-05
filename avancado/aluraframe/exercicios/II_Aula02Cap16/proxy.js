// Olha o funcionário no formato literal novamente aí gente:

let funcionario = {email: 'abc@abc.com'};


// Crie um proxy que exibe no console o valor da propriedade antes dela ser alterada e o valor novo.

let funcionarioProxy = new Proxy(funcionario,  {

    set(target, prop, value, receiver) {
        console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }

});
funcionarioProxy.email = 'umma@guma.com';