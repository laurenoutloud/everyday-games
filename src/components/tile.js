import React from 'react';
import Card from 'react-bootstrap/card';
import '../css/tile.css'

class Tile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="tile">
            <Card style ={{width: '18rem'}} body>
                {this.props.game}
            </Card>
            </div>
        )
    }
}

export default Tile;