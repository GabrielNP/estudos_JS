console.log("helper/ArquivoHelper.js loaded");
class ArquivoHelper {

    static cria(informacao) {
        return new Arquivo(...informacao.toUpperCase().split('/'));
    }
}