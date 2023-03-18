class Orcamento {
  static _proximoId = 1;

  constructor(custoDisponibilidade, horasSol, fator, media) {
    this._id = Orcamento._proximoId++;
    this._custoDisponibilidade = custoDisponibilidade;
    this._horasSol = horasSol;
    this._fator = fator;
    this._media = media;
    this._mediasDias = 30.4;
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
    return this._fator = novoFator;
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

let a = new Orcamento(50, 4.78, 80, 300);
let b = new Orcamento(50, 4.78, 80, 300);
let c = new Orcamento(50, 4.78, 80, 300);

console.log(a.id);
console.log(b.id);
console.log(c.id);

