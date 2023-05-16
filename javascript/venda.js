document.addEventListener('DOMContentLoaded', function () {
  const botaoVender = document.getElementById("venderBot");
  botaoVender.addEventListener("click", function (event) {
    prevenirDefault(event);
    const id = pegarID() - 1; 
    const orcamentoProcurado = vender(id);
    if (orcamentoProcurado) {
      const valorVenda = orcamentoProcurado.valorVenda;
      valorDaVenda(valorVenda);
    }
  });
});

function prevenirDefault(e) {
  e.preventDefault();
}

function pegarID() {
  const id = Number(document.getElementById("id").value);
  return id;
}

function vender(posicao) {
  let orcamentosJSON = JSON.parse(localStorage.getItem("minhaLista"));
  let sizeArray = orcamentosJSON.lista.length;

  if (posicao >= 0 && posicao < sizeArray) {
    let orcamentoProcurado = orcamentosJSON.lista[posicao];
    console.log(orcamentoProcurado);
    return orcamentoProcurado;
  }
}

function valorDaVenda(valorVenda) {
  console.log("Valor de venda:", valorVenda);
}
