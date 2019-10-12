import React, { Component } from "react";
import "./css/App.css";
import GameController from './components/gameController';
import MyNavbar from './components/navbar'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    document.body.style.backgroundColor = "lightblue"; //TODO move somewhere else
    return (
      <div className="App">
        <MyNavbar></MyNavbar>
        <div>
        <GameController></GameController>
        </div>
      </div>
    );
  }
}

export default App;
