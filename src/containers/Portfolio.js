import React from 'react';
import team from '../images/teamtracker.png';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import SwapPaws from './portfolio_content/SwapPaws';
import TeamTracker from './portfolio_content/TeamTracker';
import Tiles from './Tiles';
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
                <SwapPaws />
                <Tiles />
              </div>
              <div className='teamtracker'>               
                <TeamTracker />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  )
};

export default Portfolio