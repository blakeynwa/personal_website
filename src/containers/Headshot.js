import React from 'react';
import img from '../images/headshot.png';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import './Headshot.css';


const Headshot = () => {
  return (
    <Grid fluid>
      <Row className="headshot-border">
        <Col>
          <div>
            <Image className="img-responsive" src={img} />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Headshot

