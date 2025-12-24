// Super dense magical falling all over: snow, gifts, trees, sparkles, stars + SANTA!
function createFlake() {
    const types = ['❄️', '🎁', '🎄', '✨', '⭐', '🎅']; // Santa included!
    const flake = document.createElement('div');
    flake.innerText = types[Math.floor(Math.random() * types.length)];
    flake.classList.add('snowflake');

    flake.style.left = Math.random() * 100 + 'vw';

    const duration = Math.random() * 7 + 8; // 8-15s fall
    flake.style.animationDuration = ${duration}s, ${duration * 3}s; // FIXED: added backticks!

    flake.style.fontSize = Math.random() * 2.5 + 1 + 'em';
    flake.style.opacity = Math.random() * 0.6 + 0.4;

    document.body.appendChild(flake);

    setTimeout(() => flake.remove(), (duration + 2) * 1000);
}

setInterval(createFlake, 80); // Super dense full-screen effect!

// Music setup
const music = document.getElementById('music');
if (music) {
    music.volume = 0.2;
    music.play().catch(() => {}); // Try to play softly
}

// Reliable surprise on tap/click
function surprise() {
    // Confetti explosion (colorful Christmas theme)
    if (typeof confetti === 'function') {
        confetti({ particleCount: 400, spread: 100, origin: { y: 0.5 }, colors: ['#ff0000', '#00ff00', '#ffffff', '#ffd700', '#ff69b4'] });
        confetti({ particleCount: 200, angle: 60, spread: 55, origin: { x: 0, y: 0.6 } });
        confetti({ particleCount: 200, angle: 120, spread: 55, origin: { x: 1, y: 0.6 } });
    }

    // Romantic popup message
    alert("Meri Pasandida Aurat ❤️\nTu meri zindagi ka sabse khoobsurat tohfa hai.\nHar pal tere saath Christmas jaisa magical lagta hai.\nI love you endlessly – Merry Christmas forever together! 🎄🎁");

    // Play music on tap
    if (music) music.play();
}

// Safe click/tap attachment (works on mobile too)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.surprise');
    if (button) {
        button.addEventListener('click', surprise);
        button.addEventListener('touchstart', surprise);
    }
});
