function resgatar() {
    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem');

    if (nome === "") {
        mensagem.textContent = "Por favor, digite seu nome para resgatar o brinde.";
        return;
    }

    mensagem.textContent = ""; // Limpa a mensagem se estava preenchida antes
    iniciarConfete();
}

let confetes = [];
let animando = false;

function iniciarConfete() {
    const canvas = document.getElementById('confete');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    confetes = [];
    for (let i = 0; i < 100; i++) {
        confetes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            r: Math.random() * 5 + 2,
            color: gerarCorVerde(),
            speed: Math.random() * 3 + 2
        });
    }

    if (!animando) {
        animando = true;
        animarConfete(ctx, canvas);
    }
}

function gerarCorVerde() {
    const tonsVerde = ['#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38'];
    return tonsVerde[Math.floor(Math.random() * tonsVerde.length)];
}

function animarConfete(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetes.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.speed;
        if (c.y > canvas.height) {
            c.y = 0;
            c.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(() => animarConfete(ctx, canvas));
}
