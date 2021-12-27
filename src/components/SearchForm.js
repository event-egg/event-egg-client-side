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
    this.props.setSearch(e.target.city.value)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="city" >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="city" />
          </Form.Group>
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
            <Form.Group controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          }
          <Button type='submit'>Search</Button>
        </Form>
      </div>
    );
  }
}

export default SearchForm;