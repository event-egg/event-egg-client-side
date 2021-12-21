import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Basic outline of form

class WelcomeForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCity" >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="city" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default WelcomeForm;