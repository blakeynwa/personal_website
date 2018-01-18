import React from 'react';
import swap from '../../images/swappaws.png';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Image from 'react-bootstrap/lib/Image';
import './Description.css';

const SwapPaws = () => {
  return (
    <Grid fluid>
      <Row className="swap-project">
        <Col xs={12} md={12}>
          <Col xs={12} sm={12} md={4}>
            <a href="http://swappaws.herokuapp.com" target="_newtab">
              <Image src={swap} width={300} height={78}/>
            </a>
          </Col>
          <Col xs={12} sm={12} md={8}>
            <div className="description">
              <ul>
                <li>Web application built to client specification to connect dog owners with dog sitters</li>
                <li>Completed over the course of eight days on a team of three people</li>
                <li>Worked across all parts of the full stack using MVC architectural pattern</li>
                <li>Utilized agile software development for maximum efficiency</li>
              </ul>
            </div>
          </Col>
        </Col>
      </Row>
    </Grid>
  )
}

export default SwapPaws