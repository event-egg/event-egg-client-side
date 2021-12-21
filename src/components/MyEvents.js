
import React, { Component } from 'react';
import EventCard from './EventCard';

// renders user's saved events
// event cards will render 'remove event' btn instead of 'save event'

class MyEvents extends Component {
  render() {
    return (
      <div>
        <h1>MyEvents</h1>
        <EventCard type="myEvent"/>
      </div>
    );
  }
}

export default MyEvents;