import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

// is this component really necessary?
class SearchBtn extends Component {
  // onCLick = (e) => {
  //   this.props.
  // }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>Search</Button>
      </div>
    );
  }
}

export default SearchBtn;