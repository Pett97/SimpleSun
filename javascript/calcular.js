
let inputClicado = false;

var nomedocumento = document.title;

window.onfocus = function () {
  document.title = nomedocumento;
};
window.onblur = function () {
  document.title = "Voltar";
}

import { Lista } from "./orcamento.js";

const listaDeOrcamentos = new Lista();

document.addEventListener('DOMContentLoaded', function () {
  
  const botaoCalcular = document.getElementById("calcularBot");
  botaoCalcular.addEventListener("click", function (event) {
    prevenirDefault(event);
    escreverOrcamento();
  });

  const botaoSalvar = document.getElementById("salvar");
  botaoSalvar.addEventListener("click", function (event) {
    prevenirDefault(event);
    salvar();
  });

  document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('click', function () {
      inputClicado = true;
    });
  });

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


function salvar() {
  let orcamento = {
    nome: nomeCliente(),
    media: mediaAnual(),
    potencia: potenciaPlaca(),
    horas: horasSolares(),
    custo: custoMinimo(),
    valorGerado: calcularGeracao(),
    valorVenda: valorDeVenda()
  };
  listaDeOrcamentos.adicionar(orcamento);
  console.log(listaDeOrcamentos);

  localStorage.setItem("orcamento-" + Date.now(), JSON.stringify(orcamento));
}

function imprimirNoConsole() {
  console.log("teste");
  console.log(listaDeOrcamentos);
}

export function listarTabela(){
  for(let i = 0; i < listaDeOrcamentos.getQuantidade();i++){
    let tbody = document.getElementById("tbody");
  {
    let tr = tbody.insertRow();
    let td_id = tr.insertCell();
    let td_nomeClinete = tr.insertCell();
    let td_mediaAnual = tr.insertCell();
    let td_potenciaPlaca = tr.insertCell();
    let td_horasSolares = tr.insertCell();
    let td_custoMinimo = tr.insertCell();
    let td_valorGerado = tr.insertCell();
    let td_valorVenda = tr.insertCell();

    td_id = 1;
    td_nomeClinete = listaDeOrcamentos.orcamento.nomeCliente;
    td_mediaAnual = listaDeOrcamentos.orcamento.mediaAnual;
    td_potenciaPlaca = listaDeOrcamentos.orcamento.potencia;
    td_horasSolares = listaDeOrcamentos.orcamento.horasSolares;
    td_custoMinimo = listaDeOrcamentos.custo;
    td_valorGerado = listaDeOrcamentos.valorGerado;
    td_valorVenda = listaDeOrcamentos.valorVenda;
  }
  }
}



