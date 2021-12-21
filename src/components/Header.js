// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


import React, { Component } from 'react';

{/* <Route exact path="/" element={<Dashboard />} />
                  <Route exact path="/myEvents" element={<MyEvents />} />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/about" element={<About />} /> */}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>EventEgg</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Dashboard</Link></NavItem>
          <NavItem><Link to="/myEvents" className="nav-link">My Events</Link></NavItem>
          <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
          <NavItem className="justify-self-end ml-auto"><LogoutButton logoutHandler={this.props.logoutHandler} className="nav-link">Log Out</LogoutButton></NavItem>
        </Navbar>
      </div >
    );
  }
}

export default Header;