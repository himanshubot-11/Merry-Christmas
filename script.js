// Falling Snow
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerText = '❄';
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    snowflake.style.fontSize = Math.random() * 1 + 1 + 'em';
    document.body.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnowflake, 200);

// Play background music
const music = document.getElementById('music');
music.volume = 0.3;
music.play().catch(() => {
    // Some browsers block autoplay – user interaction will enable it later
});

// Surprise with confetti and message
function surprise() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert("To my Pasandida Aurat: I love you more than words can say! Wishing us the warmest, most magical Christmas together forever ❤️🎅");
}
