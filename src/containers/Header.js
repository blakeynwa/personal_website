import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const Header = () => {
  return (
    <Grid>
      <Row>
        <Col md={4} mdPush={4} className="text-center">
          <div>
            <p>Blake L Meyer</p>
            <h1 className="App-title">Full Stack Developer</h1>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header