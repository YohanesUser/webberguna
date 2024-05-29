// tic-tac-toe.js

document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('tic-tac-toe-board');
    const statusElement = document.getElementById('status');
    const resetButton = document.getElementById('reset-button');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function handleCellClick(event) {
        const cellIndex = event.target.getAttribute('data-cell-index');
        if (board[cellIndex] !== '' || !gameActive) {
            return;
        }
        updateCell(event.target, cellIndex);
        checkResult();
    }

    function updateCell(cell, index) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
    }

    function checkResult() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            statusElement.textContent = `Player ${currentPlayer} has won!`;
            gameActive = false;
            return;
        }

        const roundDraw = !board.includes('');
        if (roundDraw) {
            statusElement.textContent = 'Draw!';
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusElement.textContent = `It's ${currentPlayer}'s turn`;
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        statusElement.textContent = `It's ${currentPlayer}'s turn`;
        document.querySelectorAll('.cell').forEach(cell => (cell.textContent = ''));
    }

    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);

    function createBoard() {
        boardElement.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-cell-index', i);
            boardElement.appendChild(cell);
        }
    }

    createBoard();
    statusElement.textContent = `It's ${currentPlayer}'s turn`;
});
