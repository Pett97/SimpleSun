const listaJSON = localStorage.getItem("lista");
const listaObj = JSON.parse(listaJSON);



  const botaoListar = document.getElementById("listar");
  botaoListar.addEventListener("click", listarTabela);
  alert("teste");
  console.log(listaJSON[1].nome);
  console.log(listaObj[0].nome);
  console.log(listaObj[1].nome);



function listarTabela(){
  const listaJSON = localStorage.getItem("lista");
  const listaObj = JSON.parse(listaJSON);
  let tbody = document.getElementById("tbody");
  tbody.innerText = "";
  for(let i = 0; i < listaObj.length;i++){
    let tr = tbody.insertRow();

    let td_id = tr.insertCell();
    let td_nome = tr.insertCell();
    let td_potenciaPlaca = tr.insertCell();
    let td_mediaAnual = tr.insertCell();
    let td_horasSolares = tr.insertCell();
    let td_custoMinimo = tr.insertCell();
    let td_valorGerado = tr.insertCell();
    let td_valorVenda = tr.insertCell();

    td_id.textContent = i+1;
    td_nomeClinete.textContent = listaObj[i].nome;
    td_potenciaPlaca.textContent = listaObj[i].potencia;
    td_mediaAnual.textContent = listaObj[i].media;
    td_horasSolares.textContent = listaObj[i].horas;
    td_custoMinimo.textContent = listaObj[i].custo;
    td_valorGerado.textContent = listaObj[i].valorGerado;
    td_valorVenda.textContent = listaObj[i].valorVenda;
    
  }
}