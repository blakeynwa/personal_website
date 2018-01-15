import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Header.css';

const Header = () => {
  return (
    <Grid fluid>
      <Row className="header-border">
        <Col>
          <div className="heading-section">
            <h1 className="my-name">Blake Meyer</h1>
            <h2 className="my-title">Web Developer</h2>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header