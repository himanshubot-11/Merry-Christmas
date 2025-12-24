// Enhanced Falling Snow + Gifts
function createFlake() {
    const types = ['❄', '🎁', '✨', '🎄']; // Snow, gifts, sparkles, trees
    const flake = document.createElement('div');
    flake.innerText = types[Math.floor(Math.random() * types.length)];
    flake.classList.add('snowflake');

    // Random horizontal position across full screen
    flake.style.left = Math.random() * 100 + 'vw';

    // Random animation duration (slower/faster fall)
    const duration = Math.random() * 5 + 8; // 8-13 seconds
    flake.style.animationDuration = duration + 's';

    // Random size
    const size = Math.random() * 1.5 + 1; // 1-2.5em
    flake.style.fontSize = size + 'em';

    // Random opacity
    flake.style.opacity = Math.random() * 0.6 + 0.4;

    // Slight side-to-side drift
    flake.style.animation = fall ${duration}s linear infinite, drift ${duration * 2}s ease-in-out infinite;

    document.body.appendChild(flake);

    // Remove after falling off screen
    setTimeout(() => flake.remove(), duration * 1000 + 1000);
}

// Create flakes more frequently for fuller effect
setInterval(createFlake, 150);

// Optional: Extra CSS for drift (add this to your styles.css if you want more sway)
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes drift {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(50px); }
        }
    </style>
`);

// Play background music
const music = document.getElementById('music');
music.volume = 0.3;
music.play().catch(() => {
    // Autoplay blocked – will play on user click
});

// Surprise with confetti and message
function surprise() {
    confetti({
        particleCount: 300,
        spread: 80,
        origin: { y: 0.6 }
    });
    alert("To my Pasandida Aurat: I love you more than words can say! Wishing us the warmest, most magical Christmas together forever ❤️🎅");
}
