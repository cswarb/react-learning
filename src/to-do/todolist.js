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
  }

  itemAdded() {
    this.setState(prevState => ({
      data: [...prevState.data, {"id":4, "title": "boisisisisis"}]
    }));

    console.log(this);
    
  }  

  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
        <ToDoListItem itemdata={{"title": "One"}}/>
        <ToDoListItem itemdata={{"title": "Two"}}/>
        <ToDoListItem itemdata={{"title": "Three"}}/>
        <hr />
        <ToDoListItemInput />
        <button onClick={this.itemAdded.bind(this)}>click</button>
      </div>
    );
  }
}