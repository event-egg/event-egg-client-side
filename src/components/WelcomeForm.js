import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import WelcomeSubmitBtn from './WelcomeSubmitBtn';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


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
        // name: this.props.auth0.user.name,
        defaultCity: e.target.city.value.toLowerCase(),
        defaultInterests: interestArray,
        email: 'fakeemail@email.com'
        // email: this.props.auth0.user.email
      }
      this.props.createUser(user);

    } else if (e.nativeEvent.submitter.name === 'skip') {
      let interestArray = [];
      e.target.interestCheckboxes.forEach(elem => {
        if (e.target[elem.id].checked) {
          interestArray.push(elem.id);
        }
      });
      const user = {
        // name: this.props.auth0.user.name,
        defaultCity: e.target.city.value.toLowerCase(),
        defaultInterests: interestArray,
        email: 'fakeemail@email.com'
        // email: this.props.auth0.user.email
      }
      this.props.createUser(user);
    }
  }

  // name: String,
  //   defaultCity: String,
  //   defaultInterests: Array,
  //   savedEvents: Array,
  //   email: String

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
              <Col>
                <Form.Check
                  type="checkbox"
                  label="movies"
                  name="interestCheckboxes"
                  id="movies"
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="music"
                  name="interestCheckboxes"
                  id="music"

                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="coffee"
                  name="interestCheckboxes"
                  id="coffee"
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="theatre"
                  name="interestCheckboxes"
                  id="theatre"
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="nightlife"
                  name="interestCheckboxes"
                  id="nightlife"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Button type='submit' name='submit' >Submit</Button>
          <Button type='submit' name='skip'>Skip</Button>
        </Form>
      </div>
    );
  }
}


export default WelcomeForm;