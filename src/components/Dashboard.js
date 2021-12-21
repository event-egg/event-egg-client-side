import React, { Component } from 'react';
import EventCard from './EventCard';
import Search from './Search';




class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Search />
        <EventCard type="newEvent"/>
      </div>
    );
  }
}

export default Dashboard;