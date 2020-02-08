import React from 'react';
import Navbar from './navbar'
import GameController from './gameController';
import Home from './home'
class ContentController extends React.Component {
    constructor(props) {
        super(props);
        
    }

    getComponent(){
        let match = this.props.match.path
        switch(match){
            case '/game/:id':
                let game = this.props.match.params.id
                return <GameController game={game}></GameController>
            case '/':
                return <Home/>
            default:
                return <Home/>
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
               {this.getComponent()}
            </div>
        )
    }
}

export default ContentController;

