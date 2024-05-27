const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (evento) => publicarVideo(evento));

function publicarVideo(evento) {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const descricao = Math.floor(Math.random * 100).toString();
}
