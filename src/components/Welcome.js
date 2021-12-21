import WelcomeForm from './WelcomeForm';
import WelcomeSubmitBtn from './WelcomeSubmitBtn';
import WelcomeSkipBtn from './WelcomeSkipBtn';
import React, { Component } from 'react';



class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <WelcomeForm />
        <WelcomeSubmitBtn />
        <WelcomeSkipBtn />
      </div>
    );
  }
}

export default Welcome;