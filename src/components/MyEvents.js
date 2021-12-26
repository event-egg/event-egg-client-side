import React, { Component } from 'react';
import EventCard from './EventCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// renders user's saved events
// event cards will render 'remove event' btn instead of 'save event'

class MyEvents extends Component {



  render() {
    return (
      <div>
        <h1>MyEvents</h1>
        {this.props.user.savedEvents.length > 0 ?
          <Row sm={1} md={2} lg={5}>
            {this.props.user.savedEvents.map((event, idx) =>
              <EventCard type="myEvent" event={event} key={event.id} deleteEvent={this.props.deleteEvent} user={this.props.user} />)}
          </Row> : <p>Looks like you don't have any saved events here yet! Why not go to your Dashboard and add some events that look promising?</p>}
      </div>
    );
  }
}

export default MyEvents;