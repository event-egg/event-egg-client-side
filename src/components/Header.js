import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';
import { Container, Image } from 'react-bootstrap';



import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container fluid className='d-inline-flex justify-content-end my-2'>
        <Navbar.Brand className='me-auto d-inline-flex justify-content-center'  style={{fontSize: '1.4em'}}>
        <Link to="/" className='me-auto d-inline-flex align-items-center'>
              <Image
                alt=""
                src='./img/white-egg8bit.png'
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Link>
            <Container className='me-auto d-inline-flex align-items-center'>
              Event Egg
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='px-2' id="responsive-navbar-nav">
            <Nav className="me-auto">           
          <NavItem><Link to="/" className="nav-link">Dashboard</Link></NavItem>
          <NavItem><Link to="/myEvents" className="nav-link">My Events</Link></NavItem>
          <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
          <NavItem><LogoutBtn >Log Out</LogoutBtn></NavItem>
        </Container> 
        </ Navbar>
      </div >
    );
  }
}

export default Header;