import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Header.css';

const Header = () => {
  return (
    <Grid>
      <Row className="header-border">
        <Col mdPush={4} className="text-center">
          <div>
            <h1>Blake Meyer</h1>
            <h1>Full Stack Developer</h1>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header