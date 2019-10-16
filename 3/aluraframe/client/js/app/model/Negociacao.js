class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Data();
        this._quantidade = 1;
        this._valor = 0;

        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}