// dino-game.js

document.addEventListener('DOMContentLoaded', function() {
    const dino = document.getElementById('dino');
    const gameContainer = document.querySelector('.game-container');
    const scoreBoard = document.getElementById('score-board');
    const scoreDisplay = document.getElementById('score');

    let score = 0;
    let isJumping = false;
    let gravity = 0.9;
    let gameSpeed = 5;
    let obstacleInterval;
    let gameInterval;

    function jump() {
        if (isJumping) return;
        let position = 0;
        isJumping = true;

        let upInterval = setInterval(() => {
            if (position >= 150) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    }
                    position -= 5;
                    position = position * gravity;
                    dino.style.bottom = position + 'px';
                }, 20);
            }
            position += 30;
            position = position * gravity;
            dino.style.bottom = position + 'px';
        }, 20);
    }

    function createObstacle() {
        let obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        gameContainer.appendChild(obstacle);

        let obstaclePosition = gameContainer.clientWidth;
        obstacle.style.left = obstaclePosition + 'px';

        let obstacleInterval = setInterval(() => {
            if (obstaclePosition < -30) {
                clearInterval(obstacleInterval);
                gameContainer.removeChild(obstacle);
                score++;
                scoreDisplay.textContent = score;
            } else if (obstaclePosition > 50 && obstaclePosition < 80 && parseInt(dino.style.bottom) < 40) {
                clearInterval(obstacleInterval);
                clearInterval(gameInterval);
                alert('Game Over! Your score is ' + score);
                location.reload();
            } else {
                obstaclePosition -= gameSpeed;
                obstacle.style.left = obstaclePosition + 'px';
            }
        }, 20);
    }

    function startGame() {
        score = 0;
        scoreDisplay.textContent = score;
        document.addEventListener('keydown', jump);
        obstacleInterval = setInterval(createObstacle, 2000);
    }

    startGame();
});
