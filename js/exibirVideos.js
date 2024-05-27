import { requestAPI } from "./requestAPI.js";

const listaVideos = document.querySelector("[data-lista]");

listarVideos();

async function listarVideos() {
    const videos = await requestAPI.getVideos();
    videos.forEach((video) => {
        const cardVideo = criarCardVideo(video);
        listaVideos.appendChild(cardVideo);
    });
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
