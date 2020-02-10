let hasWinner = false;
const gameBoard = [0,1,2,3,4,5,6,7,8];
const humanPlayer = 'X';
const computerPlayer = 'O';
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]; 

const cells = document.getElementsByClassName('cell');

export function startGame(){
    document.getElementById("gameOver").style.display = "none";
    hasWinner = false;
    for (let i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square){
    if (typeof gameBoard[square.target.id] === 'number'){
        turn(square.target.id, humanPlayer);

        if(!hasWinner){
            if (!checkTie()){
                turn(bestSpot(), computerPlayer);
            }
        }
    }
}

function turn(squareId, player){
    gameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(gameBoard, player);
    if (gameWon){
        gameOver(gameWon);
    }
}

function checkWin(board, player){
    let moves = board.reduce((a, x ,i) => x === player ? a.concat(i): a, []);
    let gameWon = null;

    for (let [index,win] of winningCombinations.entries()){
        if (win.every(x => moves.indexOf(x) > -1)) {
            gameWon = {index: index, player: player};
            hasWinner = true;
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon){
    for (let index of winningCombinations[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = gameWon.player === computerPlayer ? "red": "#2ECC71";
    }
    for (let i = 0; i < cells.length; i++){
        cells[i].removeEventListener('click', turnClick, false);
    }
    gameWon.player === computerPlayer ? declareWinner("You Lost!") : declareWinner("You Won!");
}

function declareWinner(winner){
    document.getElementById("gameOver").innerText = winner;
    document.getElementById("gameOver").style.display = "block";
}

function checkTie(){
    if (emptySquares().length === 0){
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = "gray";
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!");
        return true;
    }
    return false;
}

function emptySquares(){
    return gameBoard.filter(x => typeof x == 'number');
}

function bestSpot(){
    let squares = emptySquares();
    return squares[Math.floor(Math.random() * squares.length)];
}

