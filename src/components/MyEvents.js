import React, { Component } from 'react';
import EventCard from './EventCard';

// renders user's saved events
// event cards will render 'remove event' btn instead of 'save event'

class MyEvents extends Component {
  render() {
    return (
      <div>
        <h1>MyEvents</h1>
        {this.props.user.savedEvents.length > 0 && this.props.user.savedEvents.map((event, idx) => {
          console.log(event)
          return <EventCard type="myEvent" event={event} key={event.id + idx} />
        })}
        <EventCard type="myEvent" event />
      </div>
    );
  }
}

export default MyEvents;