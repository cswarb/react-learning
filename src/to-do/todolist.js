import React, { Component } from 'react';
import { ToDoListItem } from './listitem';
import { ToDoListItemInput } from './listiteminput';

export class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "data": [
        {
          "id": 1,
          "title": "Do some work"
        },
        {
          "id": 2,
          "title": "Eat something"
        }
      ]
    };

    this.onItemAdded = this.onItemAdded.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  onItemAdded(newItemValue) {
    this.setState(prevState => ({
      data: [...prevState.data, { 
        "id": ++this.state.data.length,
        "title": newItemValue.fieldVal 
      }]
    }));
  }

  onRemoveItem(itemToRemove) {
    var newList = this.state.data.filter((item) => {
      return item.id !== itemToRemove.id;
    });

    this.setState({
      data: newList
    });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
        {this.state.data.map((item, index) => {
          return <ToDoListItem key={index} itemdata={item} onRemoveItem={this.onRemoveItem} />
        })}
        <hr />
        <ToDoListItemInput defaultFieldVal="Enter a new todo" onItemAdded={this.onItemAdded}/>
      </div>
    );
  }
}