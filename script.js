let contador = 50;
let nomes = [];

document.addEventListener('DOMContentLoaded', () => {
    atualizarContador();
    gerarQRCode('https://seusite.com');  // Altere aqui para o link final
    criarFolhas();
});

function atualizarContador() {
    document.getElementById('contador').innerText = contador;
}

function resgatar() {
    const nome = document.getElementById('nome').value.trim();
    const msg = document.getElementById('mensagem');
    const som = document.getElementById('somVitoria');

    if (nome === "") {
        msg.style.display = 'block';
        msg.innerHTML = "⚠️ Por favor, digite seu nome antes de resgatar.";
        return;
    }

    if (contador <= 0) {
        msg.style.display = 'block';
        msg.innerHTML = "❌ Infelizmente os brindes acabaram.";
        return;
    }

    contador--;
    nomes.push(nome);
    console.log('Nomes registrados:', nomes);

    atualizarContador();
    msg.style.display = 'block';
    msg.innerHTML = `🎉 Parabéns, <strong>${nome}</strong>! Seu brinde foi reservado! Passe no nosso stand!`;
    som.play();
    dispararConfete();
}

// Efeito de confete
function dispararConfete() {
    const canvas = document.getElementById('confete');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetes = [];

    for (let i = 0; i < 150; i++) {
        confetes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 5,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
            tilt: Math.random() * 10 - 5
        });
    }

    function desenhar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetes.forEach(c => {
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt, c.y);
            ctx.lineTo(c.x, c.y + c.tilt + c.d);
            ctx.stroke();
        });
        atualizar();
    }

    function atualizar() {
        confetes.forEach(c => {
            c.y += Math.cos(c.d) + 1 + c.r / 2;
            c.x += Math.sin(c.d);
            if (c.y > canvas.height) {
                c.x = Math.random() * canvas.width;
                c.y = -10;
            }
        });
    }

    let animacao = setInterval(desenhar, 20);
    setTimeout(() => clearInterval(animacao), 3000);
}

// QR Code
function gerarQRCode(link) {
    const qr = new QRious({
        element: document.getElementById('qrCanvas'),
        value: link,
        size: 180,
        background: 'rgba(255,255,255,0.8)',
        foreground: '#2E7D32'
    });
}

// Efeito de folhas caindo
function criarFolhas() {
    for (let i = 0; i < 15; i++) {
        const folha = document.createElement('img');
        folha.src = 'folha.png';
        folha.classList.add('leaf');
        folha.style.left = `${Math.random() * 100}vw`;
        folha.style.animationDuration = `${4 + Math.random() * 3}s`;
        document.body.appendChild(folha);
    }
}
