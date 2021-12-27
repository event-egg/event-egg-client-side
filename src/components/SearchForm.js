import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPreferences: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.city.value);
    const searchObject = {
      city: e.target.city.value || this.props.user.defaultCity,
      interests: [e.target.newSearch.value] || this.props.user.defaultInterests
    }
    this.props.setSearchState(searchObject);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3"  >
            {/* <Form.Label>Event Category</Form.Label>
            <Form.Control type="text" placeholder="sportsball" /> */}
            {/* <Form.Label>Date</Form.Label>
            <Form.Control type="date" /> */}
            <Form.Label>City</Form.Label>
            <Form.Control id="city" type="text" placeholder={this.props.user.defaultCity || 'Seattle'} />
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
            }
          </Form.Group>
          <Button type="submit" name='submit'>Let's get crackin'!</Button>
        </Form>
      </div>
    );
  }
}

export default SearchForm;