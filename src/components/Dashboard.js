import React, { Component } from 'react';
import EventCard from './EventCard';
import Search from './Search';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import cache from '../cache.js';
import getCurrentDateTime from '../CurrentDateTime';

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
    console.log('cache', cache.searchInput);
    if (cache.searchInput === undefined || cache.searchInput === null || cache.searchInput === {}) {
      console.log('in conditional')
      const defaultObject = {
        city: this.props.user.defaultCity,
        interests: this.props.user.defaultInterests,
        date: getCurrentDateTime()
      }
      this.setState({ searchInput: defaultObject }, () => this.getEvents(this.state.searchInput))
    } else {
      this.getEvents(cache.searchInput)
    } // gets previous searchObject from cache
  }

  setSearchState = (searchInput) => {
    // cache.searchInput = searchInput;
    // console.log('cache', cache.searchInput);

    console.log('setCurrentState cache', cache.searchInput);
    this.setState({ searchInput: searchInput }, () => this.getEvents(this.state.searchInput));
  }

  resetSearchState = () => {
    console.log('cache', cache.searchInput);
    // cache.searchInput = {};
    const defaultObject = {
      city: this.props.user.defaultCity,
      interests: this.props.user.defaultInterests,
      date: getCurrentDateTime()
    }
    this.setState({ searchInput: defaultObject }, () => this.getEvents(this.state.searchInput))
  }

  getEvents = async (searchObject) => {
    console.log("Get Events:", searchObject);
    cache.searchInput = searchObject;
    console.log('cache', cache.searchInput);
    try {
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
      console.log("config",config);
      const eventsResponse = await axios(config);
      console.log('eventsResponse.data: ', eventsResponse.data);
      this.setState({ events: eventsResponse.data });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <Container className="card-container">
        <h1 className='m-3' style={{ textAlign: 'center', fontSize: '4em', textShadow: '3px 3px 2px 2px #0000003f' }} >Events in {this.state.searchInput.city ? this.state.searchInput.city.toUpperCase() : this.props.user.defaultCity.toUpperCase()}!</h1>
        <hr></hr>
        <Search user={this.props.user} setSearchState={this.setSearchState} resetSearchState={this.resetSearchState} />
        {this.state.events.length > 0 &&
          <Row md={3} lg={5}>
            {this.state.events.length > 0 && this.state.events.map((event, idx) => <EventCard type="newEvent" event={event} key={`${event.id}${idx}`} user={this.props.user} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} showModal={this.props.showModal} />)}
          </Row>}
      </Container>
    );
  }
}

export default Dashboard;