async function getVideos() {
    const response = await fetch("http://localhost:3000/videos");
    const videos = await response.json();
    return videos;
}

async function postVideo(titulo, descricao, url, imagem) {
    const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        }),
    });
    if (!response.ok) {
        throw new Error("Não foi possível enviar o vídeo");
    }

    const video = await response.json();
    return video;
}

async function queryVideos(valorBusca) {
    const response = await fetch(`http://localhost:3000/videos?q=${valorBusca}`);
    const videos = await response.json();
    return videos;
}

export const requestAPI = {
    getVideos,
    postVideo,
    queryVideos,
};
