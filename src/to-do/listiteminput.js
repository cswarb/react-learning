import React, { Component } from 'react';
import { ToDoListItemAdd } from './listitemadd';

export class ToDoListItemInput extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  

  render() {
    return (
      <div>
        <input type="text" />
        <ToDoListItemAdd />        
      </div>
    );
  }
}