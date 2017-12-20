import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

const Header = () => {
  return (
    <Grid>
      <Col>
        <div>
          <p>Blake L Meyer</p>
          <h1 className="App-title">Full Stack Developer</h1>
        </div>
      </Col>
    </Grid>
  );
};

export default Header