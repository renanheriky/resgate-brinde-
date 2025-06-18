document.getElementById('brindeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    if (nome.trim() !== "") {
        document.getElementById('mensagem').innerHTML = `🎉 Obrigado, ${nome}! Mostre essa tela no nosso estande para garantir seu brinde! 🎁`;
        startConfetti();
    }
});

// Confetti simples com canvas
let canvas = document.getElementById('confettiCanvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createConfetti() {
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 150,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            tilt: Math.floor(Math.random() * 10) - 10
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) {
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt, p.y);
        ctx.lineTo(p.x, p.y + p.tilt + p.r);
        ctx.stroke();
    });
    updateConfetti();
}

function updateConfetti() {
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(p.d) * 2;

        if (p.y > canvas.height) {
            particles[i] = {
                x: Math.random() * canvas.width,
                y: -10,
                r: p.r,
                d: p.d,
                color: p.color,
                tilt: p.tilt
            };
        }
    }
}

function startConfetti() {
    createConfetti();
    setInterval(drawConfetti, 20);
}
