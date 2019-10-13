import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import '../css/navbar.css'
import history from '../history'

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Nav>
                <Button onClick={()=> {history.push('/')}}>
                    Home
              </Button>
            </Nav>
        )
    }
}

export default MyNavbar;