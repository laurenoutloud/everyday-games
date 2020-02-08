import React from 'react';
import '../css/game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className="title">{this.props.name}</h1>
                <h2>{this.props.description}</h2>
            </div>
        )
    }
}

export default Game;