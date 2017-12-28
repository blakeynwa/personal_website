import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Footer.css';

const Footer = () => {
  return (
    <Grid>
      <Row className="checking">
        <Col>
          <footer>
            <div>
              <a href="https://github.com/blakeynwa">Github</a>
              <a href="https://www.linkedin.com/in/blmeyer/">Linkedin</a>
              <a href="/">Test</a>
            </div>
          </footer>
        </Col>
      </Row>
    </Grid>
  );
};


export default Footer