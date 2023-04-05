
import { Lista } from "./lista.js";

 const lista = new Lista();

function prevenirDefault(e) {
  e.preventDefault();
}

const botaoCalcular = document.getElementById("calcularBot");
botaoCalcular.addEventListener("click", function (event) {
  prevenirDefault(event);
  escreverOrcamento();
});

const botaoSalvar = document.getElementById("salvar");
botaoSalvar.addEventListener("click", function (event) {
  prevenirDefault(event);
  salvar();
})


function valorDeVenda(){
  let valorDaVenda = Number(document.getElementById("valor_venda").value);
  return valorDaVenda;
}

function nomeCliente(){
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
    potencia: potenciaPlaca(),
    media: mediaAnual(),
    horas: horasSolares(),
    custo: custoMinimo(),
    valorGerado: calcularGeracao(),
    valorVenda: valorDeVenda()
  };
  localStorage.setItem("orcamento", JSON.stringify(orcamento));
  let orcamentoString = localStorage.getItem("orcamento");
  let orcamentoOBJ = JSON.parse(orcamentoString);
  //teste 
  console.log(orcamentoOBJ);
  lista.adicionar(orcamentoOBJ);
  let orcamentoRecuperado =  orcamentoOBJ;
  console.log("bejeto");
  console.log(orcamentoRecuperado);
  lista.imprimir();
}

export {lista};





