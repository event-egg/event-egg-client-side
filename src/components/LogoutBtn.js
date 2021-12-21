import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';



class LogoutBtn extends Component {
  render() {
    return (
      <div>
        <Button variant="outline-info" >Log Out</Button>
      </div>
    );
  }
}

export default LogoutBtn;