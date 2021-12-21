import React, { Component } from 'react';
import './App.css';
import { Login, Header, Footer, Welcome } from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
            }


                <Footer />
              </>
            }
          </>
    );
  }
}

        export default App;