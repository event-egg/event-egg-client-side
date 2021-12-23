import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class RemoveEventBtn extends Component {

  handleRemoveClick = () => {
    console.log('Remove Button clicked');
    // this.props.deleteEvent(this.props.user, this.props.event);
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