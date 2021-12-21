import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import  { Link } from 'react-router-dom';


import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>EventEgg</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Dashboard</Link></NavItem>
          <NavItem><Link to="/myEvents" className="nav-link">My Events</Link></NavItem>
          <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
          <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
          {/* <NavItem><LogoutBtn logoutHandler={this.props.logoutHandler} className="nav-link">Log Out</LogoutBtn></NavItem> */}
        </Navbar>
      </div >
    );
  }
}

export default Header;