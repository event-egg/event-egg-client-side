import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import SaveEventBtn from './SaveEventBtn';





class EventCard extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header>Cool Event!</Card.Header>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Cool Event Title</Card.Title>
          <Card.Text>
            Wow! This event is so cool!
          </Card.Text>
          <SaveEventBtn />
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;