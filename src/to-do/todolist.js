import React, { Component } from 'react';
import { ToDoListItem } from './listitem';
import { ToDoListItemInput } from './listiteminput';
import { ToDoListItemAdd } from './listitemadd';

export class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  

  render() {
    return (
      <div>
        <ToDoListItem />
        <ToDoListItem />
        <ToDoListItem />
        <hr />
        <ToDoListItemInput />
        <ToDoListItemAdd />
      </div>
    );
  }
}