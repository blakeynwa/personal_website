import React from 'react';
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import NavItem from 'react-bootstrap/lib/NavItem'
import Navbar from 'react-bootstrap/lib/Navbar'
import MenuItem from 'react-bootstrap/lib/MenuItem'

const Navigator = () => {
  return (
    <Navbar inverse fixedTop >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Blake L Meyer</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://resume.creddle.io/resume/hxnyrwx7c73" target="_newtab">Resume</NavItem>
          <NavItem eventKey={2} href="https://www.linkedin.com/in/blmeyer/" target="_newtab">Linkedin</NavItem>
          <NavItem eventKey={3} href="https://github.com/blakeynwa" target="_newtab">GitHub</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


export default Navigator


