import React from 'react';
import { GAME_DATA } from "../gameData";
import Game from './game'

class GameController extends React.Component {
    constructor(props) {
        super(props);
        
    }
    getGame(gameRoute){
        for(let game of GAME_DATA.games){
            if(game.route == gameRoute) {
                //get game data from backend right here? 
                return <Game name={game.name} description={game.description} id={game.id}></Game>
            }
        }
    }
    render() {
        let game = this.props.game
        return (
            <div> 
                <div>{this.getGame(game)}</div>
            </div>
        )
    }
}

export default GameController;

