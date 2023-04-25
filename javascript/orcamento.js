class Orcamento {
  constructor(nomeCliente, potenciaPlaca, mediaAnual, horasSolares, custoMinimo, valorGerado, valorVenda) {
    this._nomeCliente = nomeCliente;
    this._mediaAnual = mediaAnual;
    this._horasSolares = horasSolares;
    this._potenciaPlaca = potenciaPlaca;
    this._custoMinimo = custoMinimo;
    this._valorGerado = valorGerado;
    this._valorVenda = valorVenda;
  }
}

  class Lista {
  constructor() {
    this.lista = [];
  }

  adicionar(orcamento) {
    this.lista.push(orcamento);
  }

  remover(index) {
    this.lista.splice(index, 1);
  }

  getQuantidade() {
    return this.lista.length;
  }

  getOrcamentos() {
    return this.lista;
  }

  getOrcamento(index) {
    return this.lista[index];
  }
}


export { Lista };
export const listaDeOrcamentos = new Lista();



