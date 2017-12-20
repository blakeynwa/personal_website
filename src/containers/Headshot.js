import React from 'react';
import img from '../images/headshot.jpg';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';


const Headshot = () => {
  return (
    <Grid>
      <Row>
        <Col md={4}>
          <Image src={img} width={449.28} height={299.52} rounded />
        </Col>
      </Row>
    </Grid>
  );
};

export default Headshot

