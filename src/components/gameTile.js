import React from 'react';
import Card from 'react-bootstrap/card';
import '../css/gameTile.css'

class gameTile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="gameTile" onClick={()=> {this.props.gameSelected(this.props.route)}}>
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

export default gameTile;