import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from "./nav";
import { Clock } from "./clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav theData={this.getSomething()}></Nav>
        <Clock></Clock>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.getSomething()}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  getSomething() {
    return "something";
  }
}

export default App;