import React, { Component } from 'react';
import { ToDoListItemRemove } from './todolistremove';

export class ToDoListItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  

  render() {
    return (
      <div>
        <h1>{this.props.itemdata.title}</h1>
        <ToDoListItemRemove />
      </div>
    );
  }
}