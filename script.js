document.getElementById("descobrirMais").addEventListener("click", function(){
    document.getElementById("mufasa").style.display = "block";
    document.getElementById("ouvirMufasa").style.display = "block";
    // Esconder a curiosidade e o botão
    document.getElementById("curiosidade").style.display = "none";
    this.style.display = "none";
});

document.getElementById("ouvirMufasa").addEventListener("click", function(){
    document.getElementById("proposta").style.display = "block";
    // Esconder o botão após o áudio ser tocado
    this.style.display = "none";
});

// Exemplo de função para gerar uma curiosidade sobre o Rei Leão
function gerarCuriosidade() {
    const curiosidades = [
        "Sabia que o rugido de Mufasa é na verdade o som de um tigre?",
        "O Rei Leão foi o primeiro filme da Disney a apresentar uma trama completamente original."
        // Adicione mais curiosidades aqui
    ];
    const curiosidadeAleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    document.getElementById("curiosidade").textContent = curiosidadeAleatoria;
}

// Chamar a função quando a página carregar
window.onload = gerarCuriosidade;
