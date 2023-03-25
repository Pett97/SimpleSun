setInterval(function (){
    var cronometro = document.getElementById('tempo').innerHTML;
    var regressivo = parseInt(cronometro) - 1;
    if(regressivo===0){
        location.href = '/homepage/homepage.html';
    }
    document.getElementById('tempo').innerHTML = regressivo;},1000)