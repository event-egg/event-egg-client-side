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
    console.log('form Date: ', e.target.date.value);
    // creates a variable to represent the current date/time as backup value
    const currentDateTime = getCurrentDateTime();
    
    const searchObject = {
      city: e.target.city.value || this.props.user.defaultCity,
      interests: [e.target.interests.value] || this.props.user.defaultInterests,
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

            {/* Seems unnecessary since this functionality is already present in the form with fewer clicks required. 
            <Form.Check
              onChange={() => this.setState({ showPreferences: false })}
              type="radio"
              label="Use My Preferences"
              name="searchRadio"
              id="defaultPreferences"
            />
            <Form.Check
              onChange={() => this.setState({ showPreferences: true })}
              type="radio"
              label="Select New Preferences"
              name="searchRadio"
              id="newPreferences"
            />
            {this.state.showPreferences &&
              <>
                <Form.Label>New Search</Form.Label>
                <Form.Control id="newSearch" type="text" placeholder='explore new things...' />
              </>
            } */}
          </Form.Group>
          <Button type="submit" name='submit'>Let's get crackin'!</Button>
        </Form>
      </div >
    );
  }
}

export default SearchForm;