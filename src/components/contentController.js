import React from 'react';
import Navbar from './navbar';
import Home from './home';
import { GAME_DATA } from "../gameData";
import '../css/game.css';

class ContentController extends React.Component {
    constructor(props) {
        super(props);
    }

    getGame(gameRoute){
        for(let game of GAME_DATA.games){
            if(game.route === gameRoute) {
                return ( 
                    <div className="game">
                        <h1 className="title">{game.name}</h1>
                        <h2>{game.description}</h2>
                        <div className='gameBoard'>{game.component}</div>
                    </div>
                );
            }
        }
        return <Home/>;
    }

    getComponent(){
        let path = this.props.match.path;
        switch(path){
            case '/game/:id':
                let gameRoute = this.props.match.params.id;
                return this.getGame(gameRoute);
            default:
                return <Home/>;
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
               {this.getComponent()}
            </div>
        );
    }
}

export default ContentController;

