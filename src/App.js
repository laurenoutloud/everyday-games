import React, {Component} from "react";
import './css/App.css'
import Tile from "./components/Tile";
import {GAME_DATA} from "./gameData";

class App extends Component {
  getGameTiles(){
    let listOfGames = [];
    let game;
    for (let i = 0; i < GAME_DATA.games.length; i++){
      game = GAME_DATA.games[i];
      listOfGames.push(
        <Tile key={i} game={game.name} description={game.description}/>);
    }
    return listOfGames;
  }
  
  render(){
    document.body.style.backgroundColor = "lightblue";
    return(
      <div className ="App">
        <h1 className="title">Everyday Games</h1>
        <h2>Select a game to play!</h2>
        <div className="gameList">
        {this.getGameTiles()}
        </div>
      </div>
    );
  }
}

export default App;
