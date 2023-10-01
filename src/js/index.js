const botoes = document.querySelectorAll ('.botao');
const personagem = document.querySelectorAll ('.personagens')

botoes.forEach ((botao, indice) =>{
    botao.addEventListener("click", () =>{
        removeButton();
        removeCharacter();

        botao.classList.add("selecionado");
        personagem[indice].classList.add("selecionado");
    });
});


function removeCharacter() {
    const personagemSelecionado = document.querySelector(".personagens.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function removeButton() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

