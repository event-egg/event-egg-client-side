import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import WelcomeSubmitBtn from './WelcomeSubmitBtn';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import { withAuth0 } from '@auth0/auth0-react';
import eventCategories from '../eventCategories.js'


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
      <div>
        <Form onSubmit={this.handleWelcomeSubmit}>
          <Form.Group className="mb-3" controlId="city" >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="city" />
          </Form.Group>
          <fieldset>
            <Form.Group className="mb-3" controlId="interests" >
              <Form.Label>Interests</Form.Label>
              {
                eventCategories.map(category => {
                let nonAlphaChars = /\W/;
                let id = category.toLowerCase().replace(nonAlphaChars, '');
                  return (<Form.Check
                    key={id}
                    type="checkbox"
                    label={category}
                    name="interestCheckboxes"
                    id={id}
                  />
                  )} 
                )
              }
              {/* <Form.Check
                type="checkbox"
                label="music"
                name="interestCheckboxes"
                id="music"
              />
              <Form.Check
                type="checkbox"
                label="coffee"
                name="interestCheckboxes"
                id="coffee"
              />
              <Form.Check
                type="checkbox"
                label="theatre"
                name="interestCheckboxes"
                id="theatre"
              />
              <Form.Check
                type="checkbox"
                label="nightlife"
                name="interestCheckboxes"
                id="nightlife"
              /> */}
            </Form.Group>
          </fieldset>
          <Button type='submit' name='submit' >Submit</Button>
          <Button type='submit' name='skip'>Skip</Button>
        </Form>
      </div>
    );
  }
}


export default withAuth0(WelcomeForm);