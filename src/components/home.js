import React from 'react';
import Tile from "./gameTile";
import { GAME_DATA } from "../gameData";
import history from '../history';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: false,
            currentGame: undefined
        };
        this.gameSelected = this.gameSelected.bind(this);
    }
    gameSelected(gameRoute) {
        this.setState({
            test: !this.state.test,
            currentGame: gameRoute
        })  
        history.push('/game/' + gameRoute);
    }
    getGameTiles() {
        let listOfGames = [];
        let game;
        for (let i = 0; i < GAME_DATA.games.length; i++) {
            game = GAME_DATA.games[i];
            listOfGames.push(
                <Tile key={i} game={game.name} description={game.description} gameSelected={this.gameSelected} route={game.route}/>
            );
        }
        return listOfGames;
    }
    render() {
        return (
            <div>
                <h1 className="title">Everyday Games</h1>
                <h2>Select a game to play!</h2>
                <div className="gameList">{this.getGameTiles()}</div>
            </div>
        )
    }
}

export default Home;

