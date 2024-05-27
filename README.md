# AluraPlay - Sua Plataforma de Vídeos com Busca e Adição
![Static Badge](https://img.shields.io/badge/Status-Finalizado-green)

## Descrição
Este projeto foi desenvolvido durante um curso da Alura, com o objetivo de criar uma plataforma de vídeos interativa chamada AluraPlay. Através de requisições GET e POST, você pode explorar uma galeria de vídeos e adicionar novos conteúdos à plataforma.

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo da Alura"> </p>
<p align="center">Página inicial e formulário de cadastro de vídeos da AluraPlay, uma plataforma de compartilhamento de vídeos.</p>

![Screenshot da tela inicial do AluraPlay](https://imgur.com/aymxEsh.png)
![Screenshot da tela do formulário do AluraPlay](https://imgur.com/ShNADf2.png)

## Tecnologias utilizadas
* HTML
* CSS
* Javascript
* NodeJS
* Json-server

## Descrição Detalhada

O AluraPlay oferece as seguintes funcionalidades:

1. **Galeria de Vídeos:**
   - Ao carregar a página, uma requisição GET é feita à API para buscar os dados dos vídeos.
   - Os vídeos são exibidos em uma galeria dinâmica, com miniaturas e títulos.
   - Cada vídeo pode ser assistido diretamente na galeria.

2. **Adição de Novos Vídeos:**
   - Um formulário permite ao usuário inserir os dados de um novo vídeo (título, URL, imagem).
   - Ao enviar o formulário, uma requisição POST é feita à API para adicionar o vídeo à base de dados.
   - Após a adição, a galeria é atualizada automaticamente para exibir o novo vídeo.

3. **Busca de Vídeos:**
   - Um campo de busca permite ao usuário filtrar os vídeos por título.
   - Ao digitar um termo no campo, uma requisição GET é feita à API, incluindo o termo de busca.
   - A galeria é atualizada para exibir apenas os vídeos que correspondem ao termo buscado.

Sinta-se à vontade para contribuir com o projeto, reportar problemas ou sugerir melhorias!
