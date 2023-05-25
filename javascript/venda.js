document.addEventListener('DOMContentLoaded', function () {
  const botaoVender = document.getElementById("venderBot");
  botaoVender.addEventListener("click", function (event) {
    prevenirDefault(event);
    console.log("teste");
    let x = vender();
    console.log(x);
  });
});

function prevenirDefault(e) {
  e.preventDefault();
}

function pegarNome() {
  let id = String(document.getElementById("nomeCliente").value).toUpperCase();
  return id;
}

//let teste = listaDeOrcamentos.lista[0];


function vender() {
  let nomeParaVenda = pegarNome();
  let listaDeOrcamentos = JSON.parse(localStorage.getItem("minhaLista"));
  let sizeArray = listaDeOrcamentos.lista.length;
  
  
  for(let i = 0 ;i < sizeArray;i++ ){
    let orcamento = listaDeOrcamentos.lista[i];
    if(nomeParaVenda === orcamento.nome){
       return  listaDeOrcamentos.lista[i];
    }
  }
  return null ;
}
     







