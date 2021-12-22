import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import LoginBtn from './LoginBtn';


class Login extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.getUserData(e.target.email.value);
  }
  render() {
    return (
      <div>
        <h1>Event Egg</h1>
        <Form onSubmit={this.handleClick}>
          <Form.Group className="mb-3" controlId="email" >
            <Form.Label>email</Form.Label>
            <Form.Control type="text" placeholder="email" />
          </Form.Group>
          <Button variant="outline-info" type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;