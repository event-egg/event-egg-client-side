import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';


import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        </Navbar>
      </div >
    );
  }
}

export default Footer;