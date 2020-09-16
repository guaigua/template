import 'bootstrap/scss/bootstrap.scss';
import { Alert, Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row  } from 'react-bootstrap';
import React from 'react';

class menu extends React.Component {

    render() {
      
        return (
            <div>
                <Navbar fixed="top"  bg="light" expand="lg">
                   <Navbar.Brand className="mt-1 ml-3" href="#home">
                    <img
                        src="/img/logo.png"
                        width="300"
                        className="d-inline-block align-top"
                        alt="Hotels By Day"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Find a workspace</Nav.Link>
                            <Nav.Link href="#link">For Companies</Nav.Link>
                            <Nav.Link href="#link">Become a host</Nav.Link>
                            <Nav.Link href="#link">Sign-In</Nav.Link>
                            <Button variant="outline-success">Sign-Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>            
        );
    }
}

export default menu;