import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import eventCategories from '../eventCategories.js'
import { Col, Container, Row } from 'react-bootstrap';


// Basic outline of form

class WelcomeForm extends Component {

  handleWelcomeSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === 'submit') {
      let interestArray = [];
      e.target.interestCheckboxes.forEach(elem => {
        if (e.target[elem.id].checked) {
          interestArray.push(elem.id);
        }
      });
      const user = {
        name: this.props.auth0.user.name,
        defaultCity: e.target.city.value.toLowerCase(),
        defaultInterests: interestArray,
        // email: 'fakeemail@email.com'
        email: this.props.auth0.user.email
      }
      this.props.createUser(user);

    } else if (e.nativeEvent.submitter.name === 'skip') {
      let interestArray = [];
      const user = {
        name: this.props.auth0.user.name,
        defaultCity: e.target.city.value.toLowerCase(),
        defaultInterests: interestArray,
        email: this.props.auth0.user.email
      }
      this.props.createUser(user);
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleWelcomeSubmit}>
          <Form.Group className="my-3" controlId="city" >
            <Form.Label style={{fontSize: '1.4em', fontWeight: 'bold'}}>City:</Form.Label>
            <Form.Control type="text" placeholder="city" />
          </Form.Group>
          <fieldset>
            <Form.Group className="mb-3" controlId="interests" >
            <Form.Label style={{fontSize: '1.4em', fontWeight: 'bold'}} >Tell us some of your interests:</Form.Label>
              <Row xs={2} className='ps-4' >
              {
                eventCategories.map(category => {
                let nonAlphaChars = /\W/;
                let id = category.toLowerCase().replace(nonAlphaChars, '');
                  return (
                  <Col key={id} style={{fontSize: '1.2em'}}>
                    <Form.Check
                      type="checkbox"
                      label={category}
                      name="interestCheckboxes"
                      id={id}
                    />             
                  </Col>
                  )} 
                )
              }
              </Row>
            </Form.Group>
          </fieldset>
          <Row xs={2}>
            <Col  className='text-center'>
              <Button size='lg' className='mx-3 px-5' variant="outline-primary" style={{background: 'white', fontSize: '1.4em', fontWeight: 'bold'}} type='submit' name='submit'>Submit</Button>
            </Col>
            <Col className='text-center'>
              <Button  size='lg' className='mx-3 px-5' variant="outline-danger" style={{background: 'white', fontSize: '1.4em', fontWeight: 'bold'}} type='submit' name='skip'>Skip</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}


export default withAuth0(WelcomeForm);