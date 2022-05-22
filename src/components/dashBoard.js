import React from 'react';
import { Alert,Container, Row, Col } from 'bootstrap-4-react';

function DashBoard() {
  return (
    <>  
    <Alert light>Welcome back, <h6 style={{display: 'inline'}}>Admin</h6></Alert>
    <Container>
        <Row>
          <Col>
            <h3 className="chartheading">Latest Hits</h3>
            
          </Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
        </Row>
        <Row>
            <Col>
             table
            </Col>
        </Row>
      </Container>  
    </>
  )
}

export default DashBoard