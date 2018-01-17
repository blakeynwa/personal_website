import React from 'react';
import swap from '../images/swappaws.png';
import team from '../images/teamtracker.png';
import mtrlz from '../images/materialize.png';
import ruby from '../images/ruby.png';
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
                  <ul>
                    <li>Web application built to client specification to connect dog owners <br/> with dog sitters</li>
                    <li>Completed over the course of eight days on a team of three people</li>
                    <li>Worked across all parts of the full stack using MVC architectural <br/> pattern</li>
                    <li>Utilized agile software development for maximum efficiency</li>
                  </ul>
                  <Image className="mtrlz-tile" src={mtrlz} width={80} height={80}/>
                  <Image className="ruby-tile" src={ruby} width={80} height={80}/>
                </div>
              </div>
              <div className='teamtracker'>               
                <a href="http://theteamtrackers.herokuapp.com/" target="_newtab">
                  <Image className="teamtracker-logo" src={team} width={223} height={110}/>
                </a>
                <div className="teamtracker-description">
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  </ul>
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