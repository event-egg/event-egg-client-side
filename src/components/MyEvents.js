
import React, { Component } from 'react';
import EventCard from './EventCard';

// renders user's saved events


class MyEvents extends Component {
  render() {
    return (
      <div>
        <h1>MyEvents</h1>
        <EventCard />
      </div>
    );
  }
}

export default MyEvents;