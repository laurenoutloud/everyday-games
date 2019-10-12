import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Game from './components/game';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link, Router, Switch} from 'react-router-dom';
import Notfound from './notfound'
import history from './history';

const routing = (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/test" component={App}/>
            <Route path="/game/:id" component={Game}/>
            <Route component={Notfound}/>
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById("root"));