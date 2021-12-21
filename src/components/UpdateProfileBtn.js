import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class UpdateProfileBtn extends Component {

  handleClick = () => {
    //handle post request
    this.props.closeModal()
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Update</Button>
      </div>
    );
  }
}

export default UpdateProfileBtn;