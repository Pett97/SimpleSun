function prevenirDefault(e){
  e.preventDefault();
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

const botaoCalcular = document.getElementById("calcular");
botaoCalcular.addEventListener("click", function(event){
  prevenirDefault(event);
  escreverOrcamento();
});

const botaoSalvar = document.getElementById("salvar");
botaoSalvar.addEventListener("click", salvar);

function salvar(){
  alert("salvar");
}