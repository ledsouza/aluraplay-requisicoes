import { requestAPI } from "./requestAPI.js";
import criarCardVideo from "./exibirVideos.js";

const btnBusca = document.querySelector("[data-busca-btn]");

btnBusca.addEventListener("click", (evento) => buscarVideos(evento));

async function buscarVideos(evento) {
    evento.preventDefault();
    const listaVideos = document.querySelector("[data-lista]");
    listaVideos.innerHTML = "";

    const valorBusca = document.querySelector("[data-busca]").value;
    const videos = await requestAPI.queryVideos(valorBusca);

    videos.forEach((video) => {
        const cardVideo = criarCardVideo(video);
        listaVideos.appendChild(cardVideo);
    });
}
