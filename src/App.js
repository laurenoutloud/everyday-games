import React, {Component} from "react";
import './css/App.css'
import Tile from "./components/Tile";

class App extends Component {
  render(){
    return(
      <div className ="App">
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
