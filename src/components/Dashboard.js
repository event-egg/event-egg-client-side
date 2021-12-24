import React, { Component } from 'react';
import EventCard from './EventCard';
import Row from 'react-bootstrap/Row'
import axios from 'axios';



class Dashboard extends Component {

  componentDidMount = () => {
    this.getEvents();
  }


  constructor(props){
    super(props);
    this.state = {
      events: ""
    }
  }


  getEvents = async (keyword) => {
    console.log("Get Events");
    const res = await this.props.auth0.getIdTokenClaims();
    // put token in variable
    const jwt = res.__raw;
    const config = {
      method: 'get',
      // change back to process.env
      baseURL: 'http://localhost:3001',
      url: `/events?keyword=basketball`,
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    }
    const eventsResponse = await axios(config);
    console.log('eventsResponse.data: ', eventsResponse.data);
    this.setState({ events: eventsResponse.data });
  }


  render() {
    return (
      <div>
        <h1>{this.props.user.defaultCity}</h1> 
        { this.state.events.length > 0   &&
        <Row sm={1} md={2} lg={5}>
            {this.state.events.length > 0 && this.state.events.map(event => <EventCard type="newEvent" event={event} key={event.id} user={this.props.user} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} />)}
          </Row>}   
      </div>
    );
  }
}

export default Dashboard;