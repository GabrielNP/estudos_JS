class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        
        let arquivo = ArquivoHelper.cria(this._inputDados.value);

        console.log(`Dados do arquivo: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}