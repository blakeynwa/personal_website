import React from 'react';
import team from '../../images/teamtracker.png';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import './Description.css';

const TeamTracker = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} md={12}>
          <Col xs={12} sm={12} md={4}>
            <a href="http://theteamtrackers.herokuapp.com/" target="_newtab">
              <Image src={team} width={300} height={147.78}/>
            </a>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <div className="description">
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </div>
          </Col>
        </Col>
      </Row>
    </Grid>
  )
};

export default TeamTracker 