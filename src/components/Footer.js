import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';


import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
        <Container fluid className='d-inline-flex justify-content-center my-2'>
          <NavItem><Link to="/about" className="nav-link">            <Image
              alt=""
              src='./img/white-egg8bit.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
            /></Link></NavItem>
          </ Container>
        </Navbar>
      </div >
    );
  }
}

export default Footer;