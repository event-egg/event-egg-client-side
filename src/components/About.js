// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import AboutCard from './AboutCard';
import aboutUsArray from '../AboutUsData';



class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        {aboutUsArray.length > 0 && aboutUsArray.map((bio, idx) => <AboutCard bio={bio} key={idx} />)}
      </div>
    );
  }
}

export default About;