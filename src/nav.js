import React, { Component } from 'react';

export class Nav extends Component {
  render() {
    return (
      <nav>
        <p>{this.props.theData}</p>
      </nav>
    );
  }
}