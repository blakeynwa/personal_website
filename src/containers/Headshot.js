import React from 'react';
import img from '../images/headshot.png';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import Header from './Header'
import './Headshot.css';


const Headshot = () => {
  return (
    <Grid fluid>
      <Row className="headshot-border">
        <Col sm={12}>
          <Col sm={8}>
            <Image className="img-responsive" src={img} />
          </Col>
          <Col sm={4} smPull={4}>
            <Header />
          </Col>
        </Col>
      </Row>
    </Grid>
  );
};

export default Headshot

