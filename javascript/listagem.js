import { lista } from "./calcular.js";

document.addEventListener('DOMContentLoaded', function () {
  const teste = document.getElementById("testeLista");
  teste.addEventListener("click", imprimir);
});

function imprimir(){
    alert("vou imprimir a lista");
    console.log(lista);
}