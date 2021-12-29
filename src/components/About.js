// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import AboutCard from './AboutCard';
import aboutUsArray from '../AboutUsData';
import { Row, Container} from 'react-bootstrap';



class About extends Component {
  render() {
    return (
      <Container className='mb-3'>
        <h1 className='m-3' style={{ textAlign: 'center', fontSize: '4em', textShadow: '3px 3px 2px 2px #0000003f' }} >About Us</h1>
        <hr />
        <br style={{ color: 'black' }}></br>
        <br style={{ color: 'grey' }} />
        <Row sm={1} md={2} lg={2} xl={2}>
            {aboutUsArray.length > 0 && aboutUsArray.map((bio, idx) => <AboutCard bio={bio} key={idx} />)}
        </Row>
      </Container>
    );
  }
}

export default About;