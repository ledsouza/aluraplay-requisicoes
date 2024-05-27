async function getVideos() {
    const response = await fetch("http://localhost:3000/videos");
    const videos = await response.json();
    return videos;
}

async function postVideo() {
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

    const video = await response.json();
    return video;
}

export const requestAPI = {
    getVideos,
    postVideo,
};
