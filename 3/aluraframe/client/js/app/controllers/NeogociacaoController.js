class NegociacaoController {
    
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $("#quantidade");
        this._inputData = $("#data");
        this._inputValor = $("#valor");
    }
    
    adiciona(event) {
        event.preventDefault();

        let date = new Date(... // spread operator
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2) // arrow function              
            );  

        let negociacao = new Negociacao(
            date,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        
        console.log(this._inputQuantidade.value);
        console.log(this._inputData.value);
        console.log(this._inputValor.value);
        console.log(negociacao);
    }
}