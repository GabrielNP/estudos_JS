class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {
        
        return this._http
            .get('negociacoes/semana')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error ('Não foi possível obter as negociações da semana');
            })
    }
    

    obterNegociacoesDaSemanaPassada() {

        return this._http
            .get('negociacoes/anterior')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error ('Não foi possível obter as negociações da semana passada');
            })        
    }

    obterNegociacoesDaSemanaRetrasada() {
        
        return this._http
            .get('negociacoes/retrasada')
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            })
            .catch(erro => {
                console.log(erro);
                throw new Error ('Não foi possível obter as negociações da semana retrasada');
            })        
    }

    enviarDadosParaServidor() {

        const $ = document.querySelector.bind(document);
        const inputData = $('#data');
        const inputQuantidade = $('#quantidade');
        const inputValor = $('#valor');

        const negociacao = {
            data: inputData.value,
            quantidade: inputQuantidade.value,
            valor: inputValor.value
        };

        return new Promise((resolve, reject) => {

            this._http
                .post('/negociacoes', negociacao)
                .then()
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível enviar os dados para o servidor.');
                })
        })
       

    }
}