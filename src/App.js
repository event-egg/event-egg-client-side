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

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

const axios = require('axios');

class App extends Component {

  //   We are currently using the tempVars object to act as the state of our app
  //   Changing tempVars.isAuthenticated to false will show the log in screen, true will show the rest of the app -->
  //   Changing tempVars.userData to an empty object will show you the welcome screen, adding data to the object will show you the rest of the app
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  updateUser = async (user) => {
    if (this.state.user === {}) {
      try {
        let newUser = await axios.post('http://localhost:3001/user', user);
        this.setState({ user: newUser });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let updatedUser = await axios.patch('http://localhost:3001/user/61c23f9a2030655404de5c97', user);
        this.setState({ user: updatedUser });
      } catch (err) {
        console.log(err)
      }
    }
  }

  tempVars = {
    isAuthenticated: true,
    userData: {
      // spencer: 'isCool'
    }
  }

  render() {
    return (
      <>
        {!this.tempVars.isAuthenticated ?
          <Login /> :
          <>
            { /* if user data doesnt exist,  render welcome page, else router */}
            { Object.keys(this.tempVars.userData).length === 0 ?
              <Welcome updateUser={this.updateUser} /> :
              <Router>
              <Header />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                    <Route path="/myEvents" element={<MyEvents />} />
                    <Route path="/profile" element={<Profile />} />
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

export default App;