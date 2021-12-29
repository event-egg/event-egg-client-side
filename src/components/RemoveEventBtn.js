import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class RemoveEventBtn extends Component {

  handleRemoveClick = () => {
    this.props.deleteEvent(this.props.user, this.props.event);
    this.props.changeToMyEvent('newEvent');
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleRemoveClick} className="remove-button p-1" >Remove</Button>
      </div>
    );
  }
}

export default RemoveEventBtn;