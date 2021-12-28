import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useAuth0 } from '@auth0/auth0-react';
import { Col, Image } from 'react-bootstrap';

function LoginButton(props) {
  const { loginWithRedirect } = useAuth0();
  return <Button className="mx-auto px-5 py-4 text-nowrap" style={{minWidth: '30%', textAlign: 'center', textDecoration: 'underline', fontSize:'2rem', background: 'white', boxShadow: '3px 3px 2px 2px #0000003f'}} variant="outline-info" onClick={() => {
    loginWithRedirect(); 
  }}><strong>Log In</strong></ Button>
};

class Login extends Component {
  render() {
    return (
      <Container style={{height: '100vh', background: 'linear-gradient(90deg, rgba(160,155,232,1) 9%, rgba(124,207,143,1) 52%, rgba(0,212,255,1) 100%)' }} fluid>
        <Col className='p-5 d-flex justify-content-between flex-column pt-5 mb-0' style={{height: '100%'}}>
          <Container  className="d-flex justify-content-around mt-5 pb-5" fluid>
          <h1 style={{minWidth: '30%', textDecoration: 'underline'}} className='text-center text-nowrap display-1' fluid><strong>Event Egg</strong></h1>
          </Container>
          <Container className="d-flex justify-content-around m-0 p-0" fluid>
            <Image style={{minWidth: '300px'}} src='./img/white-egg8bit.png' fluid/>
          </Container>
          <Container className="d-flex justify-content-around mb-5 pt-5 pb-5" fluid>
            <LoginButton />
          </Container>
        </Col>
      </Container>
    );
  }
}

export default Login;