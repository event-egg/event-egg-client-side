import WelcomeForm from './WelcomeForm';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';


class Welcome extends Component {
  render() {
    return (
      <div className="pt-4" style={{height: '100vh', background: 'linear-gradient(45deg, #CFBAF0 9%, #B9FBC0 52%, #90DBF4 100%)' }}>
        <Container>
        <h1 className='heading-style text-center display-3'>Hatch some plans with Event Egg<Image style={{minWidth: '20px', maxWidth: '40px'}} src='./img/white-egg8bit.png' fluid/></h1>
          <div style={{border: '1px solid grey'}} />
        </Container>
        <WelcomeForm createUser={this.props.createUser} />
      </div>
    );
  }
}

export default Welcome;