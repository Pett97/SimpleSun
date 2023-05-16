
  document.addEventListener('keypress', function(event) {
    if (event.key === 'h' || event.key === 'H') {
      window.location.href = '/homepage/homepage.html';}
  });



const listar = document.getElementById("TesteDeLista");
listar.addEventListener("click", carregar);

function carregar() {
  
  let orcamentosJSON = JSON.parse(localStorage.getItem("minhaLista"));
  //aqui é so apra pegr o tamanho
  let sizeArray = orcamentosJSON.lista.length;

  //limpa a tabela antes 
  tbody.innerHTML = "";

    //preenche a tabela
    for (let i = 0; i < sizeArray; i++) {
      let orcamento = orcamentosJSON.lista[i];

      let newRow = `<tr>
        <td>${i + 1}</td>
        <td>${orcamento.nome}</td>
        <td>${orcamento.media}</td>
        <td>${orcamento.potencia}</td>
        <td>${orcamento.horas}</td>
        <td>${orcamento.custo}</td>
        <td>${orcamento.valorGerado.toFixed(2)}</td>
        <td>${orcamento.valorVenda}</td>
      </tr>`;

      tbody.innerHTML += newRow;
    }
  }


  //zuado essa parte Professor recomendou não usar 
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
