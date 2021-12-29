import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import getCurrentDateTime from '../CurrentDateTime';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPreferences: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // creates a variable to represent the current date/time as backup value
    const currentDateTime = getCurrentDateTime();
    const interests = e.target.interests.value;
    console.log('form Date: ', e.target.date.value, 'form Date: ', currentDateTime);
    const searchObject = {
      city: e.target.city.value || this.props.user.defaultCity,
      interests: interests.length > 0 ? [interests] : this.props.user.defaultInterests,
      date: e.target.date.value ? `${e.target.date.value}T00:00:00` : currentDateTime
      // converts any e.target.date.value to proper form of 'YYYY-MM-DDTHH:mm:ss'
    }
    console.log('handleSubmit searchObject: ', searchObject);
    this.props.setSearchState(searchObject);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3"  >
            <Form.Label>Event Category</Form.Label>
            <Form.Control id="interests" type="text" placeholder='"sportsball"' />
            <Form.Label>Date</Form.Label>
            <Form.Control id="date" type="date" />
            <Form.Label>City</Form.Label>
            <Form.Control id="city" type="text" placeholder={this.props.user.defaultCity || 'Seattle'} />
          </Form.Group>
          <Button type="submit" name='submit'>Let's get crackin'!</Button>
          <Button style={{ marginLeft: "1rem" }} onClick={this.props.resetSearchState}>Reset search</Button>
        </Form>
      </div >
    );
  }
}

export default SearchForm;