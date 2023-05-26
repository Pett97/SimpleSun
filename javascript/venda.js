document.addEventListener('DOMContentLoaded', function () {
  const botaoVender = document.getElementById("venderBot");
  botaoVender.addEventListener("click", function (event) {
    prevenirDefault(event);
    console.log("teste");
    let x = vender();
    console.log(x);
    listaPrincipalParaVendas();
    listarVendidos();
  });

  const botaoListarVendidos = document.getElementById("listarVendidosBot");
  botaoListarVendidos.addEventListener("click", function(event){

    prevenirDefault(event);
    listarVendidos();
  } );

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

function listaPrincipalParaVendas(){

  let orcamento = vender();

  let listaDeVendidos = JSON.parse(localStorage.getItem("listaVendidos"));
  if (!listaDeVendidos) {
    listaDeVendidos = { vendidos: [] };
  }

  listaDeVendidos.vendidos.push(orcamento);
  localStorage.setItem("listaVendidos", JSON.stringify(listaDeVendidos));
}

function listarVendidos(){
  let listaDeOrcamentos = JSON.parse(localStorage.getItem("listaVendidos"));

  let sizeArray = listaDeOrcamentos.vendidos.length;

  console.log(sizeArray);

  tbody.innerHTML = "";

  for(let i = 0;i< sizeArray;i++){
    let orcamento = listaDeOrcamentos.vendidos[i];

    let newRow =`<tr>
    <td>${i+1}</td>
        <td>${orcamento.nome}</td>
        <td>${orcamento.media}</td>
        <td>${orcamento.potencia}</td>
        <td>${orcamento.horas}</td>
        <td>${orcamento.custo}</td>
        <td>${orcamento.valorGerado.toFixed(2)}</td>
        <td>${orcamento.valorVenda}</td>
      </tr>`;
    
      tbody.innerHTML +=newRow;
  }

}
  

     







