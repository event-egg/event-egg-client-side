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
      searchInput: {},
      error: false,
    }
  }
  
  componentDidMount = () => {
    console.log('Cache when component mounts: ', cache.searchInput);
    if (cache.searchInput && Object.keys(cache.searchInput).length > 0) {
      console.log('Cache full on mount, calling get events with cache')
      this.getEvents(cache.searchInput)
    } // gets previous searchObject from cache
    else {
      console.log('Cache empty on mount, calling get events with default')
      const defaultObject = {
        city: this.props.user.defaultCity,
        interests: this.props.user.defaultInterests,
        date: getCurrentDateTime()
      }
      this.setState({ searchInput: defaultObject }, () => this.getEvents(this.state.searchInput))
    }
  }

  setSearchState = (searchInput) => {
    console.log('CurrentState cache', cache.searchInput);
    this.setState({ searchInput: searchInput }, () => this.getEvents(this.state.searchInput));
  }

  resetSearchState = () => {
    console.log('cache before reset:', cache.searchInput);
    //cache.searchInput = {};
    const defaultObject = {
      city: this.props.user.defaultCity,
      interests: this.props.user.defaultInterests,
      date: getCurrentDateTime()
    }
    this.setState({ searchInput: defaultObject, events: "" }, () => this.getEvents(this.state.searchInput))
  }

  getEvents = async (searchObject) => {
    console.log("Get Events search object:", searchObject);
    cache.searchInput = searchObject;
    console.log('Set Cache in get Events: ', cache.searchInput);
    try{
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
      this.setState({ events: eventsResponse.data, error: false });
    } catch (e) {
      console.log('error in getEvents:');
      this.setState({ events: {}, error: true });
    }   
  }

  capitalize(string) {
    const wordRegex = /\w\S*/g;
    const firstLetterRegex = /^\w/;
    string = string.trim().toLowerCase().replace(
      wordRegex, (word) => word.replace(
        firstLetterRegex, (letter) => letter.toUpperCase())
    );
    return string;
  }


  render() {
    return (
      <Container className="card-container">
        <h1 className='m-3' style={{ textAlign: 'center', fontSize: '4em', textShadow: '3px 3px 2px 2px #0000003f' }} >
          Hatch some plans in {this.state.searchInput.city ? 
          this.capitalize(this.state.searchInput.city) : 
          this.capitalize(this.props.user.defaultCity)}!
        </h1>
        <hr></hr>
        <Search user={this.props.user} setSearchState={this.setSearchState} resetSearchState={this.resetSearchState} />
        { !this.state.error ?
          <Row md={3} lg={4}>
            {this.state.events.length > 0 && this.state.events.map((event, idx) => <EventCard type="newEvent" event={event} key={`${event.id}${idx}`} user={this.props.user} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} showModal={this.props.showModal} />)}
          </Row> :
          <h1>No Results... Please try another search.</h1>
        }
      </Container>
    );
  }
}

export default Dashboard;