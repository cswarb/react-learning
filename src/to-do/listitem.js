import React, { Component } from 'react';
import { ToDoListItemRemove } from './todolistremove';

export class ToDoListItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
  }

  removeItem(itemToRemove) {
    this.props.onRemoveItem(this.props.itemdata);
  }
  

  render() {
    return (
      <div>
        <h1>{this.props.itemdata.title}</h1>
        <ToDoListItemRemove removeItemButton={this.removeItem} />
      </div>
    );
  }
}