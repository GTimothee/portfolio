import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './Navbar.css'

class NavBar extends React.Component{
  render(){
    return (

      <Navbar bg="dark" expand="lg">
        <Navbar.Brand ><Nav.Link><Link to="/">Home</Link></Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            
            <Nav.Link><Link to="/Projects">Projects</Link></Nav.Link>
            <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavBar
