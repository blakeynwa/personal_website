import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Bio.css';

const Bio = () => {
  return (
    <Grid fluid>
      <Row className="bio-border">
        <Col md={12} className="text-left">
          <div>
            <h1>About me</h1>
            <p>I'm looking for a neat job!</p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Bio