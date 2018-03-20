import React, { Component } from 'react';

export class ToDoListItemRemove extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
  }

  removeItem() {
    this.props.removeItemButton();
  }  

  render() {
    return (
      <button onClick={this.removeItem} type="button">Remove</button>
    );
  }
}