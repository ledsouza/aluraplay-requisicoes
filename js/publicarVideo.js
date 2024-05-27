import { requestAPI } from "./requestAPI.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (evento) => publicarVideo(evento));

async function publicarVideo(evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    await requestAPI.postVideo(titulo, descricao, url, imagem);
    window.location.replace("../pages/envio-concluido.html");
}
