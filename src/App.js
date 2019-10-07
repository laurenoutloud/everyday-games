import React, {Component} from "react";
import Tile from "./components/Tile";

class App extends Component {
  render(){
    return(
      <div>
        <h1>Everyday Games</h1>
        <p>Select a game to play!</p>
        <Tile game={"Tic-Tac-Toe"}/>
        <Tile game={"Connect Four"}/>
        <Tile game={"Hangman"}/>
        <Tile game={"Dots and Boxes"} />

      </div>
    );
  }
}

export default App;
