import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h2>{this.props.game}</h2>
        )
    }
}

export default Tile;