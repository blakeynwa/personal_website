import React from 'react';
import swap from '../images/swappaws.png';
import team from '../images/teamtracker.png';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <Grid fluid>
      <Row className="portfolio-border">
        <Col md={12} className="text-left">
          <div>
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-links">
              <div className='swappaws'>
                <Image src={swap} width={223} height={58}/>
                <a href="http://swappaws.herokuapp.com">Swap Paws</a>
              </div>
              <div className='teamtracker'>
                <Image src={team} width={223} height={223}/>
                <a href="http://theteamtrackers.herokuapp.com/">Team Tracker</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  )
};

export default Portfolio