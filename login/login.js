import { LOGIN_PADRAO, SENHA_PADRAO } from "../javascript/shared.js";

const entrar = document.getElementById("teste");
entrar.addEventListener('click', logar);


function logar() {
    var login_informado = document.getElementById("login").value;
    var senha_informada = document.getElementById("senha").value;

    var login = login_informado.toLowerCase().trim();
    var senha = senha_informada.toLowerCase().trim();

    if (login === LOGIN_PADRAO && senha === SENHA_PADRAO) {
        alert("SENHA CORRETA")
    }
    else {
        alert("ALGO DE ERRADO NÃO ESTÁ CERTO")
    }
}





