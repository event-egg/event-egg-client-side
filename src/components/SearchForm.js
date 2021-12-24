import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';



class SearchForm extends Component {
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

export default SearchForm;