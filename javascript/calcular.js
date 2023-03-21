
var mes01, mes02, mes03, mes04, mes05, mes06, mes07, mes08, mes09, mes10, mes11, mes12;

window.onload = function () {
    document.querySelector("#meses-form").addEventListener("submit", function (e) {
        e.preventDefault();
        let media = calcularMediaAnual();
        alert(media);
        escreverAMediaAnual();
        escreverOrcamento();
        let valorFinal = orcar();
        alert("VAlor De geração: " + valorFinal.toFixed(2));
        salvar();
        alert("DADOS SALVOS NA MEMORIA DO NAVEGADOR ");
        _salvarObjeto();

    });

}

function calcularMediaAnual() {
    mes01 = Number(document.getElementById("janeiro").value);
    mes02 = Number(document.getElementById("feveiro").value);
    mes03 = Number(document.getElementById("marco").value);
    mes04 = Number(document.getElementById("abril").value);
    mes05 = Number(document.getElementById("maio").value);
    mes06 = Number(document.getElementById("junho").value);
    mes07 = Number(document.getElementById("julho").value);
    mes08 = Number(document.getElementById("agosto").value);
    mes09 = Number(document.getElementById("setembro").value);
    mes10 = Number(document.getElementById("outubro").value);
    mes11 = Number(document.getElementById("novembro").value);
    mes12 = Number(document.getElementById("dezembro").value);
    var media = ((mes01 + mes02 + mes03 + mes04 + mes05 + mes06 + mes07 + mes08 + mes09 + mes10 + mes11 + mes12) / 12).toFixed(2);
    return media;
}



function escreverAMediaAnual() {

    //evento(event);
    var mediaAnual = calcularMediaAnual();
    var med = document.getElementById("media");
    med.value = mediaAnual;
}


//event é para nao subir para o começo da pagina e zuar 
function evento(event) {
    return event.preventDefault();
}


var horasSol, custoDisponibilidade, fator;


function pegarOsValores() {
    horasSol = Number(document.getElementById("horas_sol").value);
    custoDisponibilidade = Number(document.getElementById("custo_diponibilidade").value);
    fator = Number(document.getElementById("fator").value);
}

function orcar() {
    return (calcularMediaAnual() - custoDisponibilidade) / ((horasSol * (fator / 100) * 30.4));
}

function escreverOrcamento() {
    evento(event);
    pegarOsValores();
    escreverAMediaAnual();
    var orcamento = orcar();
    var budget = document.getElementById("geracao");
    budget.value = orcamento.toFixed(2);
    salvar();
}

//LOCAL STORAGE

function salvar() {
    localStorage.custo = document.getElementById("custo_diponibilidade").value;
    localStorage.horasSol = document.getElementById("horas_sol").value;
    localStorage.fator = document.getElementById("fator").value;
    localStorage.media = calcularMediaAnual();
    localStorage.geracao = document.getElementById("geracao").value
}

function _salvarObjeto() {
    const lista = new Lista();
    const orcamento = new Orcamento();
    orcamento.custoDisponibilidade = Number(localStorage.custo);
    orcamento.horasSol = Number(localStorage.horasSol);
    orcamento.fator = Number(localStorage.fator);
    orcamento.media = Number(localStorage.media);
    orcamento.valorGerado = Number(localStorage.geracao);
    lista.adicionarNovoOrcamento(orcamento);

}



