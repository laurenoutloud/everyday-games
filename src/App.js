import React, { Component } from "react";
import "./css/App.css";
import Tile from "./components/Tile";
import { GAME_DATA } from "./gameData";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: false,
      currentGame: undefined
    };
    
    this.gameSelected = this.gameSelected.bind(this);
  }

  gameSelected(gameName){
    this.setState({
      test: !this.state.test,
      currentGame: gameName
    })
    
  }

  getGameTiles() {
    let listOfGames = [];
    let game;
    for (let i = 0; i < GAME_DATA.games.length; i++) {
      game = GAME_DATA.games[i];
      listOfGames.push(
        <Tile key={i} game={game.name} description={game.description} gameSelected = {this.gameSelected} />
      );
    }
    return listOfGames;
  }

  render() {
    console.log(this.state);
    document.body.style.backgroundColor = "lightblue"; //TODO move somewhere else
    return (
      <div className="App">
        <h1 className="title">Everyday Games</h1>
        <h2>Select a game to play!</h2>
        <div className="gameList">{this.getGameTiles()}</div>
      </div>
    );
  }
}

export default App;
