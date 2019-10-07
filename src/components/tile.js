import React from 'react';
import Card from 'react-bootstrap/card';
import '../css/tile.css'

class Tile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="tile" onClick={()=> {this.props.gameSelected(this.props.game)}}>
            <Card style ={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>
                        {this.props.game}
                    </Card.Title>
                    <Card.Subtitle>
                        {this.props.description}
                    </Card.Subtitle>
                </Card.Body>

                
            </Card>
            </div>
        )
    }
}

export default Tile;