import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import SaveEventBtn from './SaveEventBtn';
import RemoveEventBtn from './RemoveEventBtn';



class EventCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.event.image.url} />
        <Card.Body>
          <Card.Title>{this.props.event.name}</Card.Title>
          <Card.Text>
            {this.props.event.description === "Undefined" ? "" : this.props.event.description}
          </Card.Text>
          {/* conditially render button based on where the event card is being rendered */}
          {this.props.type === 'newEvent' ? <SaveEventBtn saveEvent={this.props.saveEvent} event={this.props.event} user={this.props.user} /> : <RemoveEventBtn />}
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;