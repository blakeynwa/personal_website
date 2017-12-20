import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

const Portfolio = () => {
  return (
    <Grid>
      <Col>
        <div>
          <h1>Portfolio</h1>
          <ul>
            <li><a href="http://swappaws.herokuapp.com">Swap Paws</a></li>
            <li><a href="http://theteamtrackers.herokuapp.com/">Team Tracker</a></li>
          </ul>
        </div>
      </Col>
    </Grid>
  )
};

export default Portfolio