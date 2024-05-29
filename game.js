// game.js

document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const timeLeftDisplay = document.getElementById('timeLeft');
    const scoreDisplay = document.getElementById('score');

    let timeLeft = 10;
    let score = 0;
    let gameActive = false;

    clickButton.addEventListener('click', function() {
        if (!gameActive) {
            startGame();
        } else {
            score++;
            scoreDisplay.textContent = score;
        }
    });

    function startGame() {
        gameActive = true;
        score = 0;
        scoreDisplay.textContent = score;
        timeLeft = 10;
        timeLeftDisplay.textContent = timeLeft;

        const timer = setInterval(function() {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                gameActive = false;
                alert('Game Over! Kamu mendapatkan Skor: ' + score);
            }
        }, 1000);
    }
});
