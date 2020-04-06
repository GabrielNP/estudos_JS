class NegociacaoController {
    
    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes =  new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'remove');        

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }
    
    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criarNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';        
        this._limpaFormulario();
    }

    importaNegociacao() {
        console.log("Importando Negociações...");

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociaco5es/semana');
        
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
                        JSON.parse(xhr.responseText)
                            .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

                            this._mensagem.texto = "Negociações importadas com sucesso!";

                    } else {

                        console.log("Nâo foi possível obter as negociações do servidor. Status ", xhr.status);
                        console.log(xhr.responseText);
                        this._mensagem.texto = "Não foi possível obter as negocições!";
                    }
                    
                    break;
            }           
        }

        xhr.send();
    }

    _criarNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    } 
    
    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    remove() {
        this._listaNegociacoes.remove();
        this._mensagem.texto = "Negociações removidas com sucesso";
    }

}