import React from 'react';
import swap from '../images/swappaws.jpg';
import team from '../images/teamtracker.jpg';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <Grid>
      <Row className="checking">
        <Col md={4} mdPush={4} className="text-center">
          <div>
            <h1>Portfolio</h1>
            <Image className='img-responsive' src={swap}/>
            <a href="http://swappaws.herokuapp.com">Swap Paws</a>
            <Image className='img-responsive' src={team}/>
            <a href="http://theteamtrackers.herokuapp.com/">Team Tracker</a>
          </div>
        </Col>
      </Row>
    </Grid>
  )
};

export default Portfolio