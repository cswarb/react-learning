import React, { Component } from 'react';

export class ColourSwitch extends Component {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      "bgcolour": "red",
      "isOn": false
    };
  }

  componentDidMount() {
  }

  clickMe() {
    this.props.colourupdate("blue");
  }

  toggleTheState() {
    this.setState({
      "isOn": !this.state.isOn
    });
  }

  render() {
    return (
      <div>
        <input type="text" />
        <span>{this.props.bgcolor}</span>
        <button onClick={this.clickMe.bind(this)}>Click me</button>
        <button onClick={this.toggleTheState.bind(this)}>{this.state.isOn ? "on" : "off"}</button>
        {this.state.isOn ? <h2>You're On</h2> : <p>You're not on</p>}
      </div>
    );
  }
}