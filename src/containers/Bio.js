import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import './Bio.css';

const Bio = () => {
  return (
    <Grid fluid>
      <Row className="bio-border">
        <Col md={12} className="text-left">
          <div>
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper nunc lorem, sit amet pharetra risus maximus non. Nam a euismod elit, a accumsan diam. Aenean varius vitae lacus sed cursus. Sed tristique viverra mi vel semper. Etiam a diam at enim fringilla accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras commodo in quam at blandit. Maecenas euismod ut nisl sed tincidunt. Sed egestas velit sed tincidunt commodo. Proin at elit ut justo tincidunt sollicitudin. Aenean feugiat tortor turpis, faucibus maximus massa molestie ut.</p>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Bio