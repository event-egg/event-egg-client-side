import React, { Component } from 'react';
import EventCard from './EventCard';
import Button from 'react-bootstrap/Button'

//test
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      testResponse: ""
    }
  }


  handleTest = async () => {
    console.log("Get Books");
    const res = await this.props.auth0.getIdTokenClaims();
    // put token in variable
    const jwt = res.__raw;
    const config = {
      method: 'get',
      // change back to process.env
      baseURL: 'http://localhost:3001',
      url: '/test',
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    }
    const response = await axios(config);
    console.log(response.data);
    this.setState({ testResponse: response.data });
  }


  render() {
    return (
      <div>
        <h1>{this.props.user.defaultCity}</h1> 
        <h2>{this.state.testResponse}</h2>
        <Button onClick={this.handleTest}>Test Route</Button>
        {/* //Test to see if user has data in it -K -S */}
        <EventCard type="newEvent"/>
        
      </div>
    );
  }
}

export default Dashboard;