import React from 'react';
import img from '../images/headshot.jpg';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import './Headshot.css'


const Headshot = () => {
  return (
    <Grid>
      <Row className="checking">
        <Col sm={8} md={4} mdPush={4} smPush={2} xsPush={1} className="checkingtwo">
          <div className="portrait">
            <Image className="img-responsive" src={img} width={449.28} height={299.52} rounded />
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Headshot

