import React, { Component } from 'react';
import EventCard from './EventCard';
import Search from './Search';
import Row from 'react-bootstrap/Row'
import axios from 'axios';



class Dashboard extends Component {
  
  componentDidMount = () => {
    console.log(this.props.user.defaultCity);
    const defaultObject = {
      city: this.props.user.defaultCity,
      // interests: this.props.user.defaultInterests,
      // date: Date()
    }
    console.log(Date().split(' ').splice(1, 3).join(' '));
    this.getEvents(defaultObject || 'Seattle');
  }

  constructor(props){
    super(props);
    this.state = {
      events: "",
      searchInput: {}
    }
  }


  setSearchState = (searchInput) => {
    console.log('form submission', searchInput); 
    this.setState({ searchInput }, () => this.getEvents(this.state.searchInput));
  }


  getEvents = async (searchObject) => {
    console.log("Get Events:", searchObject);
    console.log(searchObject.city);
    console.log('whole search obj', searchObject);
    const res = await this.props.auth0.getIdTokenClaims();
    // put token in variable
    const jwt = res.__raw;
    const config = {
      method: 'post',
      // change back to process.env
      baseURL: 'http://localhost:3001',
      url: `/events`,
      data: searchObject,
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
        <Search user={this.props.user} setSearchState={this.setSearchState} />
        { this.state.events.length > 0   &&
        <Row sm={1} md={2} lg={5}>
            {this.state.events.length > 0 && this.state.events.map(event => <EventCard type="newEvent" event={event} key={event.id} user={this.props.user} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} />)}
          </Row>}   
      </div>
    );
  }
}

export default Dashboard;