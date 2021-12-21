import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import SearchForm from './SearchForm';
import SearchSubmitBtn from './SearchSubmitBtn';

// To Do: Change Accordian toggle to magnifying glass

class Search extends Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Search</Accordion.Header>
            <Accordion.Body>
              <SearchForm /> <SearchSubmitBtn />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default Search;