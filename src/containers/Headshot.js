import React from 'react';
import img from '../images/headshot.jpg';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';


const Headshot = () => {
  return (
    <Grid>
      <Col>
        <Image src={img} width={449.28} height={299.52} rounded />
      </Col>
    </Grid>
  );
};

export default Headshot

