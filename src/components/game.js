import React from 'react';
import '../css/game.css';
import TicTacToe from './games/tictactoe';

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="game">
                <h1 className="title">{this.props.name}</h1>
                <h2>{this.props.description}</h2>
                <div className='gameBoard'><TicTacToe/></div>
            </div>
        )
    }
}

export default Game;