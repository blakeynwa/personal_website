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
      <Row className="project">
        <Col xs={12} md={12}>
          <Col xs={12} sm={12} md={4}>
            <a href="http://theteamtrackers.herokuapp.com/" target="_newtab">
              <Image src={team} width={300} height={147.78}/>
            </a>
          </Col>
          <Col xs={12} xsPull={2} sm={12} md={8}>
            <div className="description">
              <ul>
                <li>TeamTracker is a web application that allows recreational sports teams to keep track of their players. If a game is coming up, then TeamTracker texts each player a reminder. If not enough players are available to play, alternate players are contacted until a team is full.</li>
                <li>Completed over the course of three days on a team of three people</li>
                <li>Built in collaboration with a client and to specification using wireframing and daily scrums</li>
                <li>Integrated with the Twilio API to text team members</li>
              </ul>
            </div>
          </Col>
        </Col>
      </Row>
    </Grid>
  )
};

export default TeamTracker 