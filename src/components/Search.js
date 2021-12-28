import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import SearchForm from './SearchForm';

// To Do: Change Accordian toggle to magnifying glass

class Search extends Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="1" >
          <Accordion.Item eventKey="0">
            <Accordion.Header>Search</Accordion.Header>
            <Accordion.Body>
              <SearchForm user={this.props.user} setSearchState={this.props.setSearchState} /> 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default Search;