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
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
      <Container id='app' fluid>
        <Jumbotron fluid style={{ marginBottom: "0" }}>
          <center>
            <h1>Timothée Guédon</h1>
            <h2>Ingénieur deep learning</h2>
          </center>
        </Jumbotron>

        <Row id='header'>
          <Col>
            <NavBar />
          </Col>
        </Row>

        <Container style={{ marginTop: "2%" }} id='body'>
          <Row></Row>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <Route path="/" component={Home}/>
              <Route path="/Projects" component={Projects} />
              <Route path="/Contact" component={Contact}/>
            </Col>
            <Col></Col>
          </Row>
          <Row></Row>
        </Container>
          

      </Container>
  );
}

export default App;
