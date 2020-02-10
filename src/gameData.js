import React from 'react';
import TicTacToe from "./components/games/ticTacToe";
import NotFound from "./components//notFound";

const GAME_DATA = {
    games: [
    {
        "id": 1,
        "name": "Tic Tac Toe",
        "route": "tictactoe",
        "description": "Try to get three in a row!",
        "component" : <TicTacToe/>
    },
    {
        "id": 2,
        "name": "Connect Four",
        "route": "connectfour",
        "description": "Try to get four in a row!",
        "component" : <NotFound/>
    },
    {
        "id": 3,
        "name": "Hangman",
        "route": "hangman",
        "description": "Guess the word/phrase before it's too late!",
        "component" : <NotFound/>
    },
    {
        "id": 4,
        "name": "Dots and Boxes",
        "route": "dotsandboxes",
        "description": "Make as many boxes as possible!",
        "component" : <NotFound/>
    },
]
};
export {GAME_DATA};