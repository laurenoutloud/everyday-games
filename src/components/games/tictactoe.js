import React from 'react';
import {Button} from 'react-bootstrap';
import '../../css/tictactoe.css';
import * as utils from '../../utils/tictactoeUtils';

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        utils.startGame();
    }

    render() {
        return (
            <div className="tictactoe">
                <table>
                    <tbody>
                        <tr>
                            <td className="cell" id="0"></td>
                            <td className="cell" id="1"></td>
                            <td className="cell" id="2"></td>
                        </tr>
                        <tr>
                            <td className="cell" id="3"></td>
                            <td className="cell" id="4"></td>
                            <td className="cell" id="5"></td>
                        </tr>
                        <tr>
                            <td className="cell" id="6"></td>
                            <td className="cell" id="7"></td>
                            <td className="cell" id="8"></td>
                        </tr>
                    </tbody>
                </table>
                <div className="endGame"></div>
                <br/>
                <Button className="resetButton" variant="dark" size="sm" onClick={()=> {utils.startGame()}}>Reset </Button>
            </div>
        )
    }
}

export default TicTacToe;