import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <Grid>
      <Row className="checking">
        <Col md={4} mdPush={4} className="text-center">
          <div>
            <h1>Portfolio</h1>
            <p><a href="http://swappaws.herokuapp.com">Swap Paws</a></p>
            <p><a href="http://theteamtrackers.herokuapp.com/">Team Tracker</a></p>
          </div>
        </Col>
      </Row>
    </Grid>
  )
};

export default Portfolio