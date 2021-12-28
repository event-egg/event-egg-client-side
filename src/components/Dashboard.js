import React, { Component } from 'react';
import EventCard from './EventCard';
import Search from './Search';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
    console.log('cache', cache);
    if (cache.searchInput === undefined || cache.searchInput === null) {
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
    cache.searchInput = searchInput;
    console.log('cache', cache);

    console.log('setCurrentState cache', cache.searchInput);
    this.setState({ searchInput: searchInput }, () => this.getEvents(this.state.searchInput));
  }

  resetSearchState = () => {
    console.log('cache', cache);
    cache.searchInput = {};
  }

  getEvents = async (searchObject) => {
    console.log("Get Events:", searchObject);
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
        <Button onClick={this.resetSearchState}>reset</Button>
        <h1>Events in {this.state.searchInput.city ? this.state.searchInput.city.toUpperCase() : this.props.user.defaultCity.toUpperCase()}!</h1>
        <Search user={this.props.user} setSearchState={this.setSearchState} />
        {this.state.events.length > 0 &&
          <Row md={3} lg={5}>
            {this.state.events.length > 0 && this.state.events.map(event => <EventCard type="newEvent" event={event} key={event.id} user={this.props.user} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} showModal={this.props.showModal} />)}
          </Row>}
      </Container>
    );
  }
}

export default Dashboard;