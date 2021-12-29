import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class SaveEventBtn extends Component {

  handleClick = () => {
    this.props.changeToMyEvent('myEvent');
    this.props.saveEvent(this.props.user, this.props.event);
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} className="save-button p-1">Save Event</Button>
      </div>
    );
  }
}

export default SaveEventBtn;