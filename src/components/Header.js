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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" style={{fontSize: '1.4em', background: 'linear-gradient(90deg, #CFBAF0 9%, #B9FBC0 52%, #90DBF4 100%)'}} sticky="top">
        <Container fluid className='d-inline-flex justify-content-end mt-2'>
        <Navbar.Brand className='me-auto d-inline-flex justify-content-center'  style={{fontSize: '1.5em', fontWeight: 'bold'}}>
        <Link to="/" className='me-auto d-inline-flex align-items-center mx-0 pb-1'>
              <Image
                alt=""
                src='./img/white-egg8bit.png'
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Link>
            <Container className='me-auto d-inline-flex align-items-center mb-2 ps-0 pe-4'>
              Event Egg
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='px-2' id="responsive-navbar-nav">
            <Nav className="me-auto">           
            <NavItem><Link to="/" className="nav-link text-decoration-underline">Dashboard</Link></NavItem>
            <NavItem><Link to="/myEvents" className="nav-link text-decoration-underline">My Events</Link></NavItem>
            <NavItem><Link to="/profile" className="nav-link text-decoration-underline">Profile</Link></NavItem>
            <NavItem><Link to="/about" className="nav-link text-decoration-underline">About</Link></NavItem>
            </Nav>
            <NavItem><LogoutBtn >Log Out</LogoutBtn></NavItem>
          </Navbar.Collapse>
        </Container> 
        </ Navbar>
      </div >
    );
  }
}

export default Header;