import React from 'react'
import { Navbar, Container } from "react-bootstrap";
 
 
import{Link} from "react-router-dom";


export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" style={{ heigth: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping </Link>
                    
                </Navbar.Brand>
                
          <Navbar.Text  className='fav'>
          <Link to="/fav">Favorite </Link>
              
          </Navbar.Text>
        
                 
                 

            </Container>
        </Navbar>
    )
}
