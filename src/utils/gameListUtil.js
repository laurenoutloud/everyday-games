import React from 'react';
import TicTacToe from "../components/games/tictactoe";
import NotFound from "../notfound";

export function renderGame(gameId){
    switch(gameId){
        case 1: return <TicTacToe/>;
        default: return <NotFound/>;
    }
}