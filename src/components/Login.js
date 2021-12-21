import React, { Component } from 'react';
import LoginBtn from './WelcomeForm';


class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginBtn />
      </div>
    );
  }
}

export default Login;