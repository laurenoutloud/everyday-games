import React from 'react';
import '../css/game.css'

class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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