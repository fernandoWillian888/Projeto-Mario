/*

Ojetivo 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer

Objetivo 2 - Quando o usuário clicar no x devemos fechar a modal

Objetivo 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer
    passo 1 - dar um jeito de pegar o elemento que representa o botão na tela sando o js
    passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    passo 3 - dar um jeito de pegar o elemento da modal no js
    passo 4 - abrir a modal na tela

Objetivo 2 - Quando o usuário clicar no x devemos fechar a modal
    passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
    passo 2 - dar um jeito de identificar quando o usário clicar no x
    passo 3 - fechar a modal

*/

//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela sando o js
const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const video = document.getElementById("video")
const linkDoVideo = video.src
const botaoFecharModal = document.querySelector(".fechar-modal")

function alternarModal(){
    modal.classList.toggle("aberto")
}
//passo 2 - dar um jeito de identificar quando o usuário clicar no botão

botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
    alternarModal()
    video.setAttribute("src", linkDoVideo)
})

//passo 3 - dar um jeito de pegar o elemento da modal no js

console.log("mostrar o objeto da modal", modal)

/* Objetivo 2 - Quando o usuário clicar no x devemos fechar a modal
    passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o js
*/

// passo 2 - dar um jeito de identificar quando o usário clicar no x
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal
    alternarModal()
    video.setAttribute("src", "")
})
