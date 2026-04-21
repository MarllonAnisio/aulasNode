import 'core-js/stable';
import 'regenerator-runtime';
import "./assets/css/style.css";

function enviar() {
    const nome = document.querySelector('input[name="nome"]').value;
    const sobrenome = document.querySelector('input[name="sobrenome"]').value;
    console.log(nome, sobrenome);
}

document.querySelector('button').addEventListener('click', enviar);