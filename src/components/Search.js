import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SearchForm from './SearchForm';

// To Do: Change Accordian toggle to magnifying glass

class Search extends Component {
  render() {
    return (
      <div className="search-bar">
        <Accordion style={{ display: "inline" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Search</Accordion.Header>
            <Accordion.Body>
              <SearchForm user={this.props.user} setSearchState={this.props.setSearchState} resetSearchState={this.props.resetSearchState} /> 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default Search;