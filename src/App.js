import React, { Component } from "react";
import "./css/App.css";
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import ContentController from './components/contentController';


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
            {<Route component={ContentController} />}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
