console.log("controllers/ArquivoController.js loaded");
class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {

        // let dados = this._inputDados.value.split('/').map(item => item.toUpperCase());
        // let arquivo = new Arquivo(...dados); // usando spread operator
        // console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        // this._limpaFormulario();


        // let dados = this._inputDados.value.toUpperCase().split('/');
        // let arquivo = new Arquivo(...dados); // usando spread operador
        // console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        // this._limpaFormulario();
        
        
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}