class NegociacaoService {

    constructor(negociacao) {
        this.negociacao = negociacao;
    }

    obterNegociacoes(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');
        
        // executada automaticamente cada vez que há uma alteração no estado da requisição
        xhr.onreadystatechange = () => {

            /**
             * Estados da Requisição:
             *   0: requisição ainda não iniciada
             *   1: conexão com o servidor estabelecida
             *   2: requisição recebida
             *   3: processando requisição
             *   4: requisição está concluída e a resposta está pronta
             */

            switch (xhr.readyState) {

                case 0: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> a requisição ainda não foi iniciada.");
                    break;
                case 1: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> conexão com o servidor estabelecida.");
                    break;
                case 2: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> requisição recebida.");
                    break;
                case 3: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> processando requisição.");
                    break;

                case 4: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> requisição concluída e a resposta está pronta.");

                    if (xhr.status == 200) {

                        console.log("Obtendo as negociações do servidor...");
                        // console.log("\n\n", JSON.parse(xhr.responseText), "\n\n");
                        cb(null, JSON.parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                    } else {

                        console.log("Nâo foi possível obter as negociações do servidor. Status ", xhr.status);
                        console.log(xhr.responseText);
                        cb('Não foi possível obter as negocições!', null);
                    }
                    
                    break;
            }           
        }

        xhr.send();
    }

    enviarDadosParaServidor(cb) {

        const $ = document.querySelector.bind(document);
        const inputData = $('#data');
        const inputQuantidade = $('#quantidade');
        const inputValor = $('#valor');

        const negociacao = {
            data: inputData.value,
            quantidade: inputQuantidade.value,
            valor: inputValor.value
        };

        let xhr = new XMLHttpRequest();

        xhr.open('POST', '/negociacoes');

        //Send the proper header information along with the request
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
        xhr.onreadystatechange = () => {

            switch (xhr.readyState) {

                case 0: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> a requisição ainda não foi iniciada.");
                    break;
                case 1: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> conexão com o servidor estabelecida.");
                    break;
                case 2: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> requisição recebida.");
                    break;
                case 3: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> processando requisição.");
                    break;

                case 4: 
                    console.log("Estado da requisição: ", xhr.readyState, " -> requisição concluída e a resposta está pronta.");

                    if (xhr.status == 200) {

                        console.log("Enviando as negociações para o servidor.");
                        
                        let controller = new NegociacaoController();
                        controller._limpaFormulario();
                        
                        cb(null, JSON.parse(xhr.responseText));

                    } else {

                        console.log("Nâo foi possível enviar as negociações para o servidor.\nStatus: ", xhr.status);
                        console.log(xhr.responseText);
                        cb('Não foi possível enviar as negocições!', null);
                    }

                    break;
            }
        }
    
        xhr.send(JSON.stringify(negociacao));


    }
}