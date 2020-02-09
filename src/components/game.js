import React from 'react';
import '../css/game.css';
import {renderGame} from '../utils/gameListUtil';

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="game">
                <h1 className="title">{this.props.name}</h1>
                <h2>{this.props.description}</h2>
                <div className='gameBoard'>{renderGame(this.props.id)}</div>
            </div>
        )
    }
}

export default Game;