import React, { Component } from "react";
import "./css/App.css";
import GameController from './components/gameController';
import { Route, Link,  Router, Switch } from 'react-router-dom';
import Notfound from './notfound'
import history from './history';
import Game from './components/game';
import MyNavbar from "./components/navbar";
import ContentController from './components/contentController';
import { Navbar } from "react-bootstrap";


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    document.body.style.backgroundColor = "lightblue"; //TODO move somewhere else
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={ContentController} />
            <Route path="/game/:id" component={ContentController} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
