/**
 * Um polyfill é um script que emula o comportamento de um recurso quando esse não é suportado 
 * para garantir que nosso código funcione sem termos que abdicar do que é mais novo.
 */
if (Array.prototype.includes) {
    console.log('Polyfill para Array.includes aplicado!');
    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    }
}