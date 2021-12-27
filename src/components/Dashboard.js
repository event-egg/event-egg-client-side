import React, { Component } from 'react';
import EventCard from './EventCard';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';



class Dashboard extends Component {

  componentDidMount = () => {
    this.getEvents('seattle'); //<------------------------ Hardcoded for test, this is where preferences might go
  }


  constructor(props){
    super(props);
    this.state = {
      events: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.exampleForm.value)
    this.getEvents(e.target.exampleForm.value, e.target.exampleFormLocation.value)
  }


  getEvents = async (keyword, location) => {
    console.log("Get Events:", keyword);
    const res = await this.props.auth0.getIdTokenClaims();
    // put token in variable
    const jwt = res.__raw;
    const config = {
      method: 'get',
      // change back to process.env
      baseURL: 'http://localhost:3001',
      url: `/events?keyword=${keyword} ${location}`,
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm">
            <Form.Label>Example Keyword</Form.Label>
            <Form.Control as="input" rows={3} />
          </Form.Group>          
          <Form.Group className="mb-3" controlId="exampleFormLocation">
            <Form.Label>Example location</Form.Label>
            <Form.Control as="input" rows={3} />
          </Form.Group>
          <Button type='submit' name='submit' >Submit</Button>
        </Form>
        { this.state.events.length > 0   &&
        <Row sm={1} md={2} lg={5}>
            {this.state.events.length > 0 && this.state.events.map(event => <EventCard type="newEvent" event={event} key={event.id} user={this.props.user} saveEvent={this.props.saveEvent} deleteEvent={this.props.deleteEvent} />)}
          </Row>}   
      </div>
    );
  }
}

export default Dashboard;