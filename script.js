document.getElementById('brindeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value.trim();
    var mensagemDiv = document.getElementById('mensagem');

    if (nome !== "") {
        mensagemDiv.innerHTML = `✅ Parabéns, <strong>${nome}</strong>! Passe no nosso stand para retirar seu brinde! 🎉`;
        document.getElementById('brindeForm').reset();
    } else {
        mensagemDiv.innerHTML = "Por favor, digite seu nome.";
    }
});