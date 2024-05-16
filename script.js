let score = 0;
const scoreDisplay = document.getElementById('score');
const gameOverDisplay = document.getElementById('game-over');
const holes = document.querySelectorAll('.rabbit-hole');
const rabbits = document.querySelectorAll('.rabbit');

function randomRabbit() {
    holes.forEach(hole => {
        hole.querySelector('.rabbit').style.bottom = '-100px';
    });
    const randomIndex = Math.floor(Math.random() * holes.length);
    holes[randomIndex].querySelector('.rabbit').style.bottom = '0';
}

holes.forEach(hole => {
    hole.addEventListener('click', () => {
        const rabbit = hole.querySelector('.rabbit');
        if (rabbit.style.bottom === '0px') {
            score++;
            scoreDisplay.textContent = score;
            rabbit.style.bottom = '-100px';
            if (score >= 20) {
                gameOver();
            }
        }
    });
});

function gameOver() {
    clearInterval(rabbitInterval);
    gameOverDisplay.style.display = 'flex';
}

const rabbitInterval = setInterval(randomRabbit, 1000);
