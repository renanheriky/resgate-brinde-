document.getElementById('brindeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value.trim();
    var mensagemDiv = document.getElementById('mensagem');

    if (nome !== "") {
        mensagemDiv.innerHTML = `🎉 Parabéns, <strong>${nome}</strong>! Vá até nosso stand e garanta seu brinde exclusivo! 🌿`;
        document.getElementById('brindeForm').reset();
        startConfetti();
        setTimeout(stopConfetti, 3000);
    } else {
        mensagemDiv.innerHTML = "Por favor, digite seu nome.";
    }
});

// Confetti Animation
let canvas = document.getElementById('confetti');
let ctx = canvas.getContext('2d');
let confettis = [];

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function ConfettiPiece() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 6 + 4;
    this.speed = Math.random() * 3 + 2;
    this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
}

function startConfetti() {
    confettis = [];
    for (let i = 0; i < 150; i++) {
        confettis.push(new ConfettiPiece());
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(function(p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.y += p.speed;
        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    });
    if (confettis.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}

function stopConfetti() {
    confettis = [];
        }
