function resgatar() {
    const nome = document.getElementById('nome').value;
    const msg = document.getElementById('mensagem');
    if (nome.trim() !== "") {
        msg.style.display = 'block';
        msg.innerHTML = `🎉 Obrigado, <strong>${nome}</strong>! Seu brinde foi reservado. Passe no nosso stand!`;
    } else {
        msg.style.display = 'block';
        msg.innerHTML = "⚠️ Por favor, digite seu nome antes de resgatar.";
    }
}
