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
                <a href="http://swappaws.herokuapp.com" target="_newtab">
                  <Image className="swappaws-logo" src={swap} width={223} height={58}/>
                </a>
                <div className="swappaws-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className='teamtracker'>               
                <a href="http://theteamtrackers.herokuapp.com/" target="_newtab">
                  <Image className="teamtracker-logo" src={team} width={223} height={110}/>
                </a>
                <div className="teamtracker-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  )
};

export default Portfolio