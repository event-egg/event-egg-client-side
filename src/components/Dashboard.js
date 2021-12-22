import React, { Component } from 'react';
import EventCard from './EventCard';
import Search from './Search';




class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.defaultCity}</h1> 
        {/* //Test to see if user has data in it -K -S */}
        <EventCard type="newEvent"/>
        
      </div>
    );
  }
}

export default Dashboard;