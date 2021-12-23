import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


class SaveEventBtn extends Component {
  handleClick = async () => {
    await this.props.saveEvent(this.props.user, this.props.event);
    this.props.changeToMyEvent();
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} variant="outline-success">Save Event</Button>
      </div>
    );
  }
}

export default SaveEventBtn;