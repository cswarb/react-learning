import React from 'react';
import './App.css';
import { Nav } from "./nav";

import { About } from "./scenes/About.js";
import { Details } from "./scenes/Details.js";
import { Dashboard } from "./scenes/Dashboard.js";

import { Router, BrowserRouter, Route } from "react-router-dom";
import { AppRoutes } from "./App.routes.js";
import Axios from 'axios';

import { ErrorBoundary } from "./ErrorBoundary.js";

export class App extends React.Component {
  

  constructor(props) {
    super(props);
  }

  enterDetails(state) {
    console.log("router: ", state);
    
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <div className="container">

            {/* <Router history={} routes={AppRoutes} /> */}

            <Route exact path="/" render={props => (
              <Dashboard />
            )}></Route>            
            
            <Route path="/about" render={props => (
              <React.Fragment>
                <ErrorBoundary>
                  <About />
                </ErrorBoundary>
              </React.Fragment>
            )}></Route>
            
            <Route path="/details/:id" render={props => (
              <React.Fragment>
                {/* Pass through the route info into props by spreading */}
                <Details {...props} />
              </React.Fragment>
            )}></Route>
            
          </div>
        </div>
      </BrowserRouter>
      
    );
  }

}

export default App;