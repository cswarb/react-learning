import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from "./nav";
import { Clock } from "./clock";
import { ColourSwitch } from "./colourswitch";
import { Numbers } from "./numbers";

import { ToDoList } from "./to-do/todolist";

class App extends Component {
  constructor(props) {
    super(props);
    this.colourHasUpdated = this.colourHasUpdated.bind(this);
    this.state = {
      "bgcolour": "red"
    };
  }
  render() {
    return (
      <div className="App">
        {/* <Nav></Nav> */}
        {/* <Clock></Clock> */}
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to</h1> */}
          {/* <ColourSwitch color={this.state.bgcolour} colourupdate={this.colourHasUpdated}/> */}
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <span>{this.state.bgcolour}</span> */}
        <ToDoList />
      </div>
    );
  }

  colourHasUpdated(newColour) {
    this.setState({
      "bgcolour": newColour
    });
  }
}

export default App;