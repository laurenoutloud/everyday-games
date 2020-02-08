import React from 'react';
import Card from 'react-bootstrap/card';
import '../css/game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);

        return (
            <div>
                <div>
                {this.props.name}
                </div>
                <div>
                {this.props.description}
                </div>
            </div>
        )
    }
}

export default Game;