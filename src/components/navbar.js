import React from 'react';
import { Nav } from 'react-bootstrap';
import '../css/navbar.css'

class MyNavbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           
            
                
                <Nav>
                    <Nav.Item href="#">
                        Home
              </Nav.Item>
                    
                </Nav>
           
            
        )
    }
}

export default MyNavbar;