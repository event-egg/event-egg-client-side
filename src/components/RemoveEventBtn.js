import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class RemoveEventBtn extends Component {

  handleRemoveClick = () => {
    this.props.deleteEvent(this.props.user, this.props.event);
    this.props.changeToMyEvent('newEvent');
    console.log("handle remove")
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleRemoveClick} variant="outline-danger">Remove</Button>
      </div>
    );
  }
}

export default RemoveEventBtn;