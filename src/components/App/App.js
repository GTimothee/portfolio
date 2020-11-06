import React from 'react';
import './App.css';
import NavBar from './../Navbar/Navbar.js'
import Home from './../Home/Home.js'
import Projects from './../Projects/Projects.js'
import Contact from './../Contact/Contact.js'
import { Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
      <Container id='app'>
        <Jumbotron fluid>
          <h1>Timothée Guédon</h1>
        </Jumbotron>

        <Row id='header'>
          <Col>
            <NavBar />
          </Col>
        </Row>

        <Row id='body'>
          <Route path="/" component={Home}/>
          <Route path="/Projects" component={Projects} />
          <Route path="/Contact" component={Contact}/>
        </Row>

        <Row id='footer'>
          <Col>This is </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
  );
}

export default App;
