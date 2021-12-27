import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class SearchForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicCity" >
            <Form.Label>Event Category</Form.Label>
            <Form.Control type="text" placeholder='"sportsball"' />
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder={this.props.user.defaultCity || 'Seattle'} />
            <Button type="submit" name='submit'>Let's get crackin'!</Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchForm;