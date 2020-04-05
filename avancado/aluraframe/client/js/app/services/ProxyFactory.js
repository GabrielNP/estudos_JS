/**
 * Este design pattern provê uma abstração dos procedimentos de criação de um objeto, nos poupando de utilizar o operador new.
 * Normalmente solicitamos a criação dos objetos à factory através de um método create, 
 * e internamente ela faz todo o procedimento necessário para montagem do mesmo, facilitando a criação do objeto.
 * 
 * As factorys são particularmente úteis quando utilizadas na criação de objetos complexos, como é o caso dos nossos Proxys. 
 * Também são úteis quando precisamos gerar objetos ligeiramente diferentes, podendo passar apenas estas pequenas modificações como argumento da factory,
 * e ela gerará um objeto correspondente.
*/

class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            get (target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {

                    return function() {

                        console.log(`Interceptando ${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set (target, prop, value, receiver) {

                let retorno = Reflect.set(target, prop, value, receiver);

                if (target[prop] = value) acao(target);
                
                return retorno;
            }
        });

    }

    static _ehFuncao(func) {

        return typeof(func) == typeof(Function)
    }
}