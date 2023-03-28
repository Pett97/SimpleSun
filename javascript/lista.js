export default class Lista {
  constructor(nome) {
    this.nome = nome;
    this.itens = [];
  }

  adicionar(item) {
    this.itens.push(item);
  }

  remover(index) {
    this.itens.splice(index, 1);
  }

  salvarLocalStorage() {
    localStorage.setItem(this.nome, JSON.stringify(this.itens));
  }

  carregarLocalStorage() {
    const itensLocalStorage = JSON.parse(localStorage.getItem(this.nome));
    if (itensLocalStorage) {
      this.itens = itensLocalStorage;
    }
  }
}
