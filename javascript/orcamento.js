export class Orcamento {
  constructor(nomeCliente, potenciaPlaca, mediaAnual, horasSolares, custoMinimo, valorGerado, valorVenda) {
    this._nomeCliente = nomeCliente;
    this._mediaAnual = mediaAnual;
    this._horasSolares = horasSolares;
    this._potenciaPlaca = potenciaPlaca;
    this._custoMinimo = custoMinimo;
    this._valorGerado = valorGerado;
    this._valorVenda = valorVenda;
  }

  get valorVenda(){
    return this._valorVenda;
  }

  set valorVenda(novoValor){
    return this._valorVenda = novoValor;
  }

  get nomeCliente() {
    return this._nomeCliente;
  }

  set nomeCliente(novoNome) {
    return this._nomeCliente = novoNome.toUpperCase();
  }

  get mediaAnual() {
    return this._mediaAnual;
  }

  set mediaAnual(mediaAnual) {
    this._mediaAnual = mediaAnual;
  }

  get horasSolares() {
    return this._horasSolares;
  }

  set horasSolares(horasSolares) {
    this._horasSolares = horasSolares;
  }

  get potenciaPlaca() {
    return this._potenciaPlaca;
  }

  set potenciaPlaca(potenciaPlaca) {
    this._potenciaPlaca = potenciaPlaca;
  }

  get custoMinimo() {
    return this._custoMinimo;
  }

  set custoMinimo(custoMinimo) {
    this._custoMinimo = custoMinimo;
  }

  calcularGeracao() {
    let valorGerado =
      (this._mediaAnual - this._custoMinimo) /
      (this._horasSolares * (this._potenciaPlaca / 100) * 30.4);
    return valorGerado;
  }
}