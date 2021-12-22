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

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


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
      user: {}
    }
    //call get userdata here here -for Daniel
  }

  //make handleGetUser function here -for Daniel 
  getUserData = async (email) => { // this user will be replaced once OAuth has been implemented
    try {
      let userFromDB = await axios.get(`http://localhost:3001/user?email=${email}`);
      console.log(userFromDB.data, ' logged in!')
      this.setState({ user: userFromDB.data });
    } catch (err) {
      // alert('no');
      console.log(err);
    }
  }

  // componentDidMount() {
  //   this.getUserData();
  // }
  // called in WelcomeForm.js
  createUser = async (user) => {
    try {
      let newUser = await axios.post(`http://localhost:3001/user`, user);
      this.setState({ user: newUser.data });
    } catch (err) {
      console.log(err);
    }
  }

  //called in ProfileUpdateModal.js
  updateUser = async (user, id) => {
    try {
      console.log(process.env.DB_URL);
      let updatedUser = await axios.put(`http://localhost:3001/user/${id}`, user);
      this.setState({ user: updatedUser.data });
    } catch (err) {
      console.log(err)
    }
  }


  tempVars = {
    isAuthenticated: true,
  }

  render() {
    return (
      <>
        {Object.keys(this.state.user).length === 0 ?
          <Login getUserData={this.getUserData} /> :
          <>
            { /* if user data doesnt exist,  render welcome page, else router */}
            {Object.keys(this.state.user).length === 0 ?
              <Welcome createUser={this.createUser} /> :
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<Dashboard user={this.state.user}/>} />
                  <Route path="/myEvents" element={<MyEvents />} />
                  <Route path="/profile" element={<Profile user={this.state.user} updateUser={this.updateUser} />} />
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