import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import MyEvents from './components/MyEvents';
import Profile from './components/Profile';
import About from './components/About';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

class App extends Component {

  //   We are currently using the tempVars object to act as the state of our app
  //   Changing tempVars.isAuthenticated to false will show the log in screen, true will show the rest of the app -->
  //   Changing tempVars.userData to an empty object will show you the welcome screen, adding data to the object will show you the rest of the app
  // user: {
  //   "name": "Andrew",
  //   "defaultCity": "Seattle",
  //   "defaultInterests": ["cats", "drinks", "facial hair", "movies", "coffee", "theatre"],
  //   "savedEvents": [],
  //   "email": "and.rw@this.com"
  // }


  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoading: true
    }
  }

  getUserData = async () => {
    try{
    const res = await this.props.auth0.getIdTokenClaims();
    const jwt = res.__raw;
    const config = {
      method: 'get',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: `/user?email=${this.props.auth0.user.email}`,
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    }
    const userFromDB = await axios(config);
    this.setState({ user: userFromDB.data }, () => {
      setTimeout(() => {
        this.setState({isLoading: false});
      }, 500); // <------- adjust this to adjust spinner time
    });
  } catch (err) {
    console.log(err);
  };
  }

  
  // called in WelcomeForm.js
  createUser = async (user) => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
      method: 'post',
      baseURL: `${process.env.REACT_APP_SERVER_URL}`,
      url: `/user`,
      data: user,
      headers: { "Authorization": `Bearer ${jwt}` }
      }
        const updatedUser = await axios(config);
        this.setState({ user: updatedUser.data });
      } catch (e) {
        console.error(e);
      }
    }

  //called in ProfileUpdateModal.js
  updateUser = async (user, id) => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        method: 'patch',
        baseURL: `${process.env.REACT_APP_SERVER_URL}`,
        url: `/user/${id}`,
        data: user,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      const updatedUser = await axios(config);
      this.setState({ user: updatedUser.data });
    } catch (e) {
      console.error(e);
    }
  }

  deleteUser = async (user, id) => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        method: 'delete',
        baseURL: `${process.env.REACT_APP_SERVER_URL}`,
        url: `/user/${user._id}`,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      await axios(config);
      this.setState({ user: {}})    
    } catch (e) {
      console.error(e);
    }
  }

  saveEvent = async (user, event) => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        method: 'post',
        baseURL: `${process.env.REACT_APP_SERVER_URL}`,
        url: `/events/${user._id}`,
        data: event,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      const userUpdatedWithEvents = await axios(config);
      this.setState({ user: userUpdatedWithEvents.data })
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    const { getAccessTokenSilently } = this.props.auth0; 
    getAccessTokenSilently().then(token => this.getUserData()) //This function returns an auth token after successful log in, co-opting to call our getUserData funct. 
  }

  render() {
    
    return (
      <>
        {!(this.props.auth0.isAuthenticated ||  this.props.auth0.isLoading) ?
          <Login /> :
          <>
            {
              this.state.isLoading  || this.props.auth0.isLoading ?
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              : 
              Object.keys(this.state.user).length === 0 ?
              <Welcome createUser={this.createUser} /> :
              <Router>
                <Header />
                  <Routes>
                      <Route path="/" element={<Dashboard auth0={this.props.auth0} user={this.state.user} saveEvent={this.saveEvent} />} />
                      <Route path="/myEvents" element={<MyEvents auth0={this.props.auth0} user={this.state.user} />} />
                      <Route path="/profile" element={<Profile user={this.state.user} updateUser={this.updateUser} deleteUser={this.deleteUser} />} />
                      <Route path="/about" element={<About />} /> 
                  </Routes>
                <Footer />
              </ Router>
            }
          </>
        }
      </>
    );
  }
}

export default withAuth0(App);