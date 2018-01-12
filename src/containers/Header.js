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
          <div>
            <h1 className="header-text">Blake Meyer</h1>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header