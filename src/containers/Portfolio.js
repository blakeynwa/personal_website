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
    <Grid fluid>
      <Row className="portfolio-border">
        <Col md={4} mdPush={4} className="text-center">
          <div>
            <h1>Portfolio</h1>
            <div className="portfolio-links">
              <Col className='swappaws'>
                <Image thumbnail src={swap}/>
                <a href="http://swappaws.herokuapp.com">Swap Paws</a>
              </Col>
              <Col className='teamtracker'>
                <Image thumbnail src={team}/>
                <a href="http://theteamtrackers.herokuapp.com/">Team Tracker</a>
              </Col>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  )
};

export default Portfolio