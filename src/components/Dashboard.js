import React, { Component } from 'react';
import EventCard from './EventCard';
import Search from './Search';
import Row from 'react-bootstrap/Row'
import axios from 'axios';
import cache from '../cache.js';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: "",
      searchInput: {}
    }
  }
  // TODO: to reset back to default params, create button to clear cache (cache = {})
  componentDidMount = () => {
    if (cache.searchInput === undefined || cache.searchInput === null) {
      const defaultObject = {
        city: this.props.user.defaultCity
        // interests: this.props.user.defaultInterests,
        // date: Date() // need to format according to search requirements; Date().split(' ').splice(1, 3).join(' ');
      }
      this.setState({ searchInput: defaultObject }, () => this.getEvents(this.state.searchInput))
    } else {
      this.getEvents(cache.searchInput)
    } // gets previous searchObject from cache
  }

  setSearchState = (searchInput) => {
    cache.searchInput = searchInput;
    console.log('setCurrentState cache', cache.searchInput);
    this.setState({ searchInput: searchInput}, () => this.getEvents(this.state.searchInput));
  }

  getEvents = async (searchObject) => {
    console.log("Get Events:", searchObject);
    const res = await this.props.auth0.getIdTokenClaims();
    // put token in variable
    const jwt = res.__raw;
    const config = {
      method: 'post',
      // change back to process.env
      baseURL: process.env.REACT_APP_SERVER_URL,
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
        {this.state.events.length > 0 &&
          <Row sm={1} md={2} lg={5}>
            {this.state.events.length > 0 && this.state.events.map(event => <EventCard type="newEvent" event={event} key={event.id} user={this.props.user} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} />)}
          </Row>}
      </div>
    );
  }
}

export default Dashboard;