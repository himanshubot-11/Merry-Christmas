// Super magical falling: snow, gifts, trees, sparkles, stars + SANTA!
function createFlake() {
    const types = ['❄️', '🎁', '🎄', '✨', '⭐', '🎅']; // Added Santa!
    const flake = document.createElement('div');
    flake.innerText = types[Math.floor(Math.random() * types.length)];
    flake.classList.add('snowflake');

    flake.style.left = Math.random() * 100 + 'vw';

    const duration = Math.random() * 7 + 8;
    flake.style.animationDuration = ${duration}s, ${duration * 3}s;

    flake.style.fontSize = Math.random() * 2.5 + 1 + 'em'; // Bigger for Santa

    flake.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(flake);

    setTimeout(() => flake.remove(), (duration + 2) * 1000);
}

setInterval(createFlake, 100); // More frequent = denser effect all over!

// Music (starts after tap on mobile)
const music = document.getElementById('music');
music.volume = 0.2;

// Epic tap effect: Confetti + Romantic popup
function surprise() {
    // Full-screen colorful confetti bursts
    confetti({ particleCount: 400, spread: 100, origin: { y: 0.5 }, colors: ['#ff0000', '#00ff00', '#ffffff', '#ffd700', '#ff69b4'] });
    confetti({ particleCount: 200, angle: 60, spread: 55, origin: { x: 0, y: 0.6 } });
    confetti({ particleCount: 200, angle: 120, spread: 55, origin: { x: 1, y: 0.6 } });

    // Heartfelt love message popup
    alert("Meri Pasandida Aurat ❤️\nTu meri zindagi ka sabse khoobsurat tohfa hai.\nHar pal tere saath Christmas jaisa magical lagta hai.\nI love you endlessly – Merry Christmas forever together! 🎄🎁");

    // Start music if not playing
    music.play();
}
