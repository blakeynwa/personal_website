import React from 'react';
import img from '../images/headshot.png';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import './Header.css';


const Header = () => {
  return (
    <Grid fluid>
      <Row className="headshot-border">
        <Col sm={12} md={12}>
          <Col sm={8}>
            <Image className="img-responsive" src={img} />
            <div className="heading-section">
              <h1 className="my-name">Blake Meyer</h1>
              <h2 className="my-title">Web Developer</h2>
            </div>
          </Col>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header

