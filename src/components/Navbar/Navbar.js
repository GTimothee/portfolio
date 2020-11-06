import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './Navbar.css'

class NavBar extends React.Component{
  render(){
    return (

      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Projects">Projects</Link></Nav.Link>
            <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavBar
