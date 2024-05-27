import { requestAPI } from "./requestAPI.js";

const listaVideos = document.querySelector("[data-lista]");

listarVideos();

async function listarVideos() {
    try {
        const videos = await requestAPI.getVideos();
        videos.forEach((video) => {
            const cardVideo = criarCardVideo(video);
            listaVideos.appendChild(cardVideo);
        });
    } catch (error) {
        let mensagemErro = "Ops! Algo deu errado.";
        if (error.message.includes("Network Error")) {
            mensagemErro = "Sem conexão com a internet. Verifique sua rede e tente novamente.";
        } else if (error.response && error.response.status >= 500) {
            mensagemErro =
                "Ocorreu um problema no servidor. Por favor, tente novamente mais tarde.";
        }
        listaVideos.innerHTML = `<h3 class="mensagem__titulo">${mensagemErro}</h3>`;
    }
}

export default function criarCardVideo(video) {
    const itemVideo = document.createElement("li");
    itemVideo.className = "videos__item";
    itemVideo.innerHTML = `
        <iframe
            width="100%"
            height="72%"
            src="${video.url}"
            title="${video.titulo}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <div class="descricao-video">
            <img
                src="${video.imagem}"
                alt="Logo do canal Alura Cursos Online"
            />
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
        </div>
    `;
    return itemVideo;
}
