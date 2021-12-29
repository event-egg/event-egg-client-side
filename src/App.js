import React, { Component } from 'react';
import './App.scss';
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
import EventModal from './components/EventModal';
import cache from './cache.js';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      searchInput: "",
      modalIsShown: false,
      modalEvent: {},
      isLoading: true
    }
  }

  getUserData = async () => {
    try {
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
          this.setState({ isLoading: false });
        }, 1500); // <------- adjust this to adjust spinner time
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
      this.setState({ user: {} })
    } catch (e) {
      console.error(e);
    }
  }

  saveEvent = async (user, event) => {
    // console.log("User in save Event:", user);
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
      this.setState({ user: userUpdatedWithEvents.data });
    } catch (e) {
      console.error(e);
    }
  }

  deleteEvent = async (user, event) => {
    // console.log("User in deleteEvent:", user);
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        method: 'delete',
        baseURL: `${process.env.REACT_APP_SERVER_URL}`,
        url: `/events/${user._id}`,
        data: event,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      const userUpdatedRemovedEvent = await axios(config);
      this.setState({ user: userUpdatedRemovedEvent.data })
    } catch (e) {
      console.error(e);
    }
  }

  showModal = (event, eventType) => {
    // console.log('showModal activated');
    this.setState({ modalIsShown: true, modalEvent: event });
  }

  closeModal = () => {
    // console.log('closeModal activated');
    this.setState({ modalIsShown: false });
    // !this.state.modalIsShown ? console.log('showModal state is false') : console.log('showModal state is true')
  }

  componentDidMount() {
    const { getAccessTokenSilently } = this.props.auth0;
    getAccessTokenSilently().then(token => this.getUserData()) //This function returns an auth token after successful log in, co-opting to call our getUserData funct. 
  }
  resetCache = () => {
    console.log('cache BEFORE reset:', cache.searchInput);
    cache.searchInput = {};
    console.log('cache AFTER reset:', cache.searchInput);
  }
    
  render() {
    
    return (
      <>
        {!(this.props.auth0.isAuthenticated || this.props.auth0.isLoading) ?
          <Login /> :
          <>
            {
              this.state.isLoading || this.props.auth0.isLoading ?
                <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  width: "100vw",
                  background: "linear-gradient(90deg, #CFBAF0 9%, #B9FBC0 52%, #90DBF4 100%)",
                  position: 'fixed'
                }}>
                  <Spinner
                    as="img"
                    src="./img/white-egg8bit.png"
                    size="xl"
                    animation="border"
                    role="status" 
                    style={{
                      width: "25vh",
                      height: "25vh",
                      color: "transparent"
                    }}/>
                  <span className="visually-hidden">Loading...</span>
                </div>
                :
                Object.keys(this.state.user).length === 0 ?
                  <Welcome createUser={this.createUser} /> :
                  <Router>
                    <Header setSearch={this.setSearch} />
                    <Routes>
                      <Route path="/" element={<Dashboard auth0={this.props.auth0} user={this.state.user} searchInput={this.state.searchInput} saveEvent={this.saveEvent} deleteEvent={this.deleteEvent} showModal={this.showModal} closeModal={this.closeModal} />} />
                      <Route path="/myEvents" element={<MyEvents auth0={this.props.auth0} user={this.state.user} deleteEvent={this.deleteEvent} showModal={this.showModal} closeModal={this.closeModal} />} />
                      <Route path="/profile" element={<Profile resetCache={this.resetCache} user={this.state.user} updateUser={this.updateUser} deleteUser={this.deleteUser} />} />
                      <Route path="/about" element={<About />} />
                    </Routes>
                    <EventModal modalIsShown={this.state.modalIsShown} closeModal={this.closeModal} event={this.state.modalEvent} user={this.state.user} saveEvent={this.saveEvent} deleteEvent={this.deleteEvent} />
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