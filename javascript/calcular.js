//autoexecutavel 
document.addEventListener('DOMContentLoaded', function () {

  const botaoCalcular = document.getElementById("calcularBot");
  botaoCalcular.addEventListener("click", function (event) {
    prevenirDefault(event);
    escreverOrcamento();
  });

  //Função anônima com argumento
  const botaoSalvar = document.getElementById("salvar");
  botaoSalvar.addEventListener("click", function (event) {
    prevenirDefault(event);
    salvar3();
  });

  document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('click', function () {
      inputClicado = true;
    });
  });

  //função sem argumento
  document.addEventListener('keypress', function (event) {
    if (!inputClicado && event.key === 'h' || event.key === 'H') {
      window.location.href = '/homepage/homepage.html';
    }

  });

  document.addEventListener('keypress', function (event) {
    if (event.key === 'c' || event.key === 'C') {
      escreverOrcamento();
    }
  });

});


let inputClicado = false;

var nomedocumento = document.title;

window.onfocus = function () {
  document.title = nomedocumento;
};
window.onblur = function () {
  document.title = "Voltar";
}



//fu
function prevenirDefault(e) {
  e.preventDefault();
}



function valorDeVenda() {
  let valorDaVenda = Number(document.getElementById("valor_venda").value);
  return valorDaVenda;
}

function nomeCliente() {
  let nome = String(document.getElementById("nome_cliente").value);
  return nome;
}

function mediaAnual() {
  let media = Number(document.getElementById("media_anual").value);
  return media;
}

function horasSolares() {
  let horas = Number(document.getElementById("horas_sol").value);
  return horas;
}

function potenciaPlaca() {
  let potencia = Number(document.getElementById("potencia").value);
  return potencia;
}

function custoMinimo() {
  let custo = Number(document.getElementById("custo_minimo").value);
  return custo;
}

function calcularGeracao() {
  let valorGerado = (mediaAnual() - custoMinimo()) / ((horasSolares() * (potenciaPlaca() / 100)) * 30.4);
  return valorGerado;

}

function escreverOrcamento() {
  let valor = calcularGeracao();
  let budget = document.getElementById("geracao");
  budget.value = valor.toFixed(2);
  prevenirDefault(event);
}



function salvar2(){
  let orcamento = {
    nome: nomeCliente(),
    media: mediaAnual(),
    potencia: potenciaPlaca(),
    horas: horasSolares(),
    custo: custoMinimo(),
    valorGerado: calcularGeracao(),
    valorVenda: valorDeVenda()
  };
  return orcamento;
}


function salvar3(){
  let orcamento = salvar2();

  let listaDeOrcamentos = JSON.parse(localStorage.getItem("minhaLista"));
  if (!listaDeOrcamentos) {
    listaDeOrcamentos = { lista: [] };
  }

  listaDeOrcamentos.lista.push(orcamento);

  localStorage.setItem("minhaLista", JSON.stringify(listaDeOrcamentos));
}








