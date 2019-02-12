import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <nav className="container">
        <h1>To do list</h1>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/details/1">Details</Link>
      </nav>
    );
  }
}