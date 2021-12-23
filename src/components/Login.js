import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton(props) {
  const { loginWithRedirect } = useAuth0();
  return <Button variant="outline-info" onClick={() => {
    loginWithRedirect(); 
  }}>Log In</ Button>
};

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Event Egg</h1>
          <LoginButton />
      </div>
    );
  }
}

export default Login;