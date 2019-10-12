import React from 'react';
import Card from 'react-bootstrap/card';
import '../css/game.css'

class Game extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        const {params} = this.props.match;
        return (
            <h1 className="gameHeader">{params.id}</h1>
        )
    }
}

export default Game;