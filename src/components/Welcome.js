import WelcomeForm from './WelcomeForm';
// import WelcomeSubmitBtn from './WelcomeSubmitBtn';
// import WelcomeSkipBtn from './WelcomeSkipBtn';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';


class Welcome extends Component {
  render() {
    return (
      <Container className="pt-5">
        <h1>Welcome</h1>
        <WelcomeForm createUser={this.props.createUser} />
      </Container>
    );
  }
}

export default Welcome;