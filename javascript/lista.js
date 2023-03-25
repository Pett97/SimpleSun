class Lista {
    constructor() {
        this._orcamentos = [];
    }

    adicionarNovoOrcamento(orcamento) {
         return this._orcamentos.push(orcamento);
    }

    quantidadeDeOrcamentos(){
        let quantidade = this._orcamentos.length;
        return quantidade;
    }
}

export { Lista };