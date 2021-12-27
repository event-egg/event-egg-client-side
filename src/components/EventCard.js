import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import SaveEventBtn from './SaveEventBtn';
import RemoveEventBtn from './RemoveEventBtn';
import Button from 'react-bootstrap/Button';
import EventModal from './EventModal';


class EventCard extends Component {

  // Constructor to create state
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      modalEvent: this.props.event,
      modalIsShown: false
    }
  }

  changeToMyEvent = (type) => {
    this.setState({ type: type });
  }


  // show modal when user clicks event image
  handleImgClick = () => {
    this.props.showModal(this.props.event);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.event.image.url} onClick={this.handleImgClick} />
        <Card.Body>
          <Card.Title>{this.props.event.name}</Card.Title>
          <Card.Text>
            {this.props.event.description === "Undefined" ? "" : this.props.event.description}
          </Card.Text>
          {/* conditially render button based on where the event card is being rendered */}
          {this.state.type === 'newEvent' ?
            <SaveEventBtn saveEvent={this.props.saveEvent} event={this.props.event} user={this.props.user} changeToMyEvent={this.changeToMyEvent} /> :
            <RemoveEventBtn user={this.props.user} event={this.props.event} deleteEvent={this.props.deleteEvent} changeToMyEvent={this.changeToMyEvent} />
          }
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;