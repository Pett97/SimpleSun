const listar = document.getElementById("TesteDeLista");
listar.addEventListener("click", carregar);

function carregar() {
  let orcamentosJSON = JSON.parse(localStorage.getItem("minhaLista"));
  let sizeArray = orcamentosJSON.lista.length;

  for (let i = 0; i < sizeArray; i++) {
    let orcamento = orcamentosJSON.lista[i];

    let tr = tbody.insertRow();
    let td_nomeCliente = tr.insertCell();
    let td_mediaAnual = tr.insertCell();
    let td_potenciaPlaca = tr.insertCell();
    let td_horasSolares = tr.insertCell();
    let td_custoMinimo = tr.insertCell();
    let td_valorGerado = tr.insertCell();
    let td_valorVenda = tr.insertCell();

    td_nomeCliente.innerHTML = orcamento.nome;
    td_mediaAnual.innerHTML = orcamento.media;
    td_potenciaPlaca.innerHTML = orcamento.potencia;
    td_horasSolares.innerHTML = orcamento.horas;
    td_custoMinimo.innerHTML = orcamento.custo;
    td_valorGerado.innerHTML = orcamento.valorGerado.toFixed(2);
    td_valorVenda.innerHTML = orcamento.valorVenda;
  }
}


function teste() {
  for (let i = 0; i < sizeArray; i++) {
    let orcamento = orcamentosJSON.lista[i];

    let tr = tbody.insertRow();
    let td_id = tr.insertCell();
    let td_nomeCliente = tr.insertCell();
    let td_mediaAnual = tr.insertCell();
    let td_potenciaPlaca = tr.insertCell();
    let td_horasSolares = tr.insertCell();
    let td_custoMinimo = tr.insertCell();
    let td_valorGerado = tr.insertCell();
    let td_valorVenda = tr.insertCell();

    td_id.innerHTML = i + 1;
    td_nomeCliente.innerHTML = orcamento.nome;
    td_mediaAnual.innerHTML = orcamento.media;
    td_potenciaPlaca.innerHTML = orcamento.potencia;
    td_horasSolares.innerHTML = orcamento.horas;
    td_custoMinimo.innerHTML = orcamento.custo;
    td_valorGerado.innerHTML = orcamento.valorGerado;
    td_valorVenda.innerHTML = orcamento.valorVenda;
  }
}
