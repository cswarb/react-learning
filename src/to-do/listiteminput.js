import React, { Component } from 'react';
import { ToDoListItemAdd } from './listitemadd';

export class ToDoListItemInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldVal: ""
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFieldValue = this.updateFieldValue.bind(this);
  }

  componentDidMount() {
  }

  updateFieldValue(event) {
    this.setState({
      fieldVal: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.onItemAdded(this.state);
    this.clearInput(event);
    event.preventDefault();
  }

  clearInput(event) {
    this.setState({
      fieldVal: ""
    });    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder={this.props.defaultFieldVal} value={this.state.fieldVal} onChange={this.updateFieldValue} required/>
        <ToDoListItemAdd />        
      </form>
    );
  }
}