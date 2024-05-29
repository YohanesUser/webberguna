// shooting-game.js

document.addEventListener('DOMContentLoaded', function() {
    const gameContainer = document.querySelector('.game-container');
    const player = document.getElementById('player');
    const scoreBoard = document.getElementById('score-board');
    const scoreDisplay = document.getElementById('score');

    let score = 0;
    let playerSpeed = 10;
    let targetSpeed = 5;
    let gameInterval;
    let targetInterval;

    // Move player
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const playerLeft = player.offsetLeft;
        if (key === 'ArrowLeft' && playerLeft > 0) {
            player.style.left = playerLeft - playerSpeed + 'px';
        } else if (key === 'ArrowRight' && playerLeft < gameContainer.clientWidth - player.clientWidth) {
            player.style.left = playerLeft + playerSpeed + 'px';
        }
    });

    // Start game
    function startGame() {
        score = 0;
        scoreDisplay.textContent = score;
        gameInterval = setInterval(updateGame, 20);
        targetInterval = setInterval(createTarget, 1000);
    }

    // Update game state
    function updateGame() {
        const targets = document.querySelectorAll('.target');
        targets.forEach(target => {
            const targetTop = target.offsetTop;
            if (targetTop > gameContainer.clientHeight) {
                target.remove();
            } else if (isCollision(player, target)) {
                score++;
                scoreDisplay.textContent = score;
                target.remove();
            } else {
                target.style.top = targetTop + targetSpeed + 'px';
            }
        });
    }

    // Create a new target
    function createTarget() {
        const target = document.createElement('div');
        target.classList.add('target');
        target.style.left = Math.random() * (gameContainer.clientWidth - 30) + 'px';
        gameContainer.appendChild(target);
    }

    // Check for collision
    function isCollision(player, target) {
        const playerRect = player.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        return !(
            playerRect.top > targetRect.bottom ||
            playerRect.bottom < targetRect.top ||
            playerRect.left > targetRect.right ||
            playerRect.right < targetRect.left
        );
    }

    // Initialize game
    startGame();
});
