let gameBoard;
let hasWinner = false;
const player = 'X';
const computer = 'O';
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
    gameBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++){
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

export function turnClick(square){
    if (typeof gameBoard[square.target.id] == 'number'){
        turn(square.target.id, player);

        if(!checkTie() && !hasWinner){
            turn(bestSpot(), computer);
        }
    }
}

export function turn(squareId, player){
    gameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(gameBoard, player);
    if (gameWon){
        gameOver(gameWon);
    }
}

export function checkWin(board, player){
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

export function gameOver(gameWon){
    for (let index of winningCombinations[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = gameWon.player === computer ? "red": "#2ECC71 ";
    }
    for (let i = 0; i < cells.length; i++){
        cells[i].removeEventListener('click', turnClick, false);
    }
    gameWon.player === computer ? declareWinner("You Lost!") : declareWinner("You Won!");
}

export function declareWinner(winner){
    document.getElementById("gameOver").innerText = winner;
    document.getElementById("gameOver").style.display = "block";
}

export function checkTie(){
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

export function emptySquares(){
    return gameBoard.filter(x => typeof x == 'number');
}

export function bestSpot(){
    let squares = emptySquares();
    return squares[Math.floor(Math.random() * squares.length)];
}

