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
        let service = new NegociacaoService();

        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaPassada(),
            service.obterNegociacoesDaSemanaRetrasada()
        ])
        .then(negociacoes => {
            negociacoes
                .reduce((arrayConcatenado, array) => arrayConcatenado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        })
        .catch(erro => this._mensagem.texto = erro);
    }

    sendPost() {
        event.preventDefault();
        let service = new NegociacaoService();        

        service.enviarDadosParaServidor()
            .then(this._mensagem.texto = 'Negociações enviadas com sucesso para o servidor.')
            .catch(erro => this._mensagem.texto = erro);
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