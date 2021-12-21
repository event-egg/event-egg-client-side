import React, { Component } from 'react';
import './App.css';
import { Login, Header, Footer, Welcome, Dashboard, MyEvents, Profile, About } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyEvents from './components/MyEvents';

class App extends Component {


  tempVars = {
    isAuthenticated: true,
    userData: {}
  }



  render() {
    return (
      <>
        {!this.tempVars.isAuthenticated ?
          <Login /> :
          <>
            <Header />
            {/* if user data doesnt exist,  render welcome page, else router */}
            {Object.keys(this.tempVar.userData).length === 0 ?
              <Welcome /> :
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route exact path="/myEvents">
                    <MyEvents />
                  </Route>
                  <Route exact path="/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                </Switch>
              </ Router>
            }
            <Footer />
          </>
        }
      </>
    );
  }
}

export default App;