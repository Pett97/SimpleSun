class Lista {
    constructor() {
        this._orcamentos = [];
    }

    adicionarNovoOrcamento(orcamento) {
         return this._orcamentos.push(Orcamento);
    }

    removerOrcamento(orcamento){
        
    }

    quantidadeDeOrcamentos(){
        let quantidade = this._orcamentos.length;
        return quantidade;
    }


}


let lista = new Lista();
console.log(lista.quantidadeDeOrcamentos());
