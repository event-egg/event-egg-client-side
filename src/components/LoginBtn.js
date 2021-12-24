import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';


// add onClick to activate Auth0 login

class LoginBtn extends Component {
  render() {
    return (
      <div>
        <Button variant="outline-info" >Log In</Button>
      </div>
    );
  }
}

export default LoginBtn;