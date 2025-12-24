// Super dense magical falling all over: snow, gifts, trees, sparkles, stars + SANTA!
function createFlake() {
    const types = ['❄️', '🎁', '🎄', '✨', '⭐', '🎅']; // Includes Santa!
    const flake = document.createElement('div');
    flake.innerText = types[Math.floor(Math.random() * types.length)];
    flake.classList.add('snowflake');

    flake.style.left = Math.random() * 100 + 'vw';

    const duration = Math.random() * 7 + 8; // 8-15 seconds
    flake.style.animationDuration = ${duration}s, ${duration * 3}s; // FIXED: proper backticks!

    flake.style.fontSize = Math.random() * 2.5 + 1 + 'em';
    flake.style.opacity = Math.random() * 0.6 + 0.4;

    document.body.appendChild(flake);

    setTimeout(() => flake.remove(), (duration + 2) * 1000);
}

setInterval(createFlake, 80); // Dense full-screen magic!

// Music setup
const music = document.getElementById('music');
if (music) {
    music.volume = 0.2;
    music.play().catch(() => {}); // Try autoplay, silent fail
}

// Epic surprise on tap/click
function surprise() {
    // Colorful confetti explosion
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 400,
            spread: 100,
            origin: { y: 0.5 },
            colors: ['#ff0000', '#00ff00', '#ffffff', '#ffd700', '#ff69b4']
        });
        confetti({
            particleCount: 200,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 }
        });
        confetti({
            particleCount: 200,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 }
        });
    }

    // Heartfelt popup message
    alert("Meri Pasandida Aurat ❤️\nTu meri zindagi ka sabse khoobsurat tohfa hai.\nHar pal tere saath Christmas jaisa magical lagta hai.\nI love you endlessly – Merry Christmas forever together! 🎄🎁");

    // Play music on tap
    if (music) music.play();
}

// Attach reliably (works on desktop + mobile)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.surprise');
    if (button) {
        button.addEventListener('click', surprise);
        button.addEventListener('touchstart', surprise);
    }
});
