import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Home extends React.Component{
  render(){
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col large={true}> Content </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default Home
