const calcular = document.getElementById("calcular");
calcular.addEventListener("click",calcularMediaAnual);

var mes01, mes02, mes03, mes04, mes05, mes06, mes07, mes08, mes09, mes10, mes11, mes12;

function pegarOsValoresMensais(){
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
}

function calcularMediaAnual(){
    pegarOsValoresMensais();
    var media = ((mes01 + mes02 + mes03 + mes04 + mes05 + mes06 + mes07 + mes08  + mes09 + mes10 + mes11+ mes12) / 12).toFixed(2);
    console.log(media);
    return media; 
}

function escreverAMediaAnual(){
    var mediaAnual = calcularMediaAnual();
    var med = document.getElementById("media");
    med.value = mediaAnual;
}