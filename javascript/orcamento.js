
class Orcamento {
  static _proximoId = 1;

  constructor() {
    this._id = Orcamento._proximoId++;
    this._custoDisponibilidade = localStorage.custo;
    this._horasSol = localStorage.horasSol;
    this._fator = localStorage.fator / 100 ;
    this._media = localStorage.media;
    this._mediasDias = 30.4;
    this._resultado = localStorage.geracao;
  }


  get resultado(){
    return this._resultado;
  }

  set resultado(novoResultado){
    return this._resultado = novoResultado;
  }

  get id() {
    return this._id;
  }

  get valorGerado() {
    let valorGerado = ((this._media - this._custoDisponibilidade) / (this._horasSol * (this._fator / 100) * this._mediasDias));
    return valorGerado.toFixed(2);
  }

  get media() {
    return this._media;
  }

  set media(novaMedia) {
    return this._media = novaMedia;
  }

  get fator() {
    return this._fator;
  }

  set fator(novoFator) {
    return this._fator = (novoFator / 100) ;
  }

  get horasSol() {
    return this._horasSol;
  }

  set horasSol(editarHoras) {
    return this._horasSol = editarHoras;
  }

  get custoDisponibilidade() {
    return this._custoDisponibilidade;
  }

  set custoDisponibilidade(novoCusto) {
    return this._custoDisponibilidade = novoCusto;
  }

}

