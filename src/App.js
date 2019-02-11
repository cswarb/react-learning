import React from 'react';
import './App.css';
import { Nav } from "./nav";
import { ToDoList } from "./todo/toDo.js";
import { AddToDoItem } from "./todo/addToDoItem.js";
import uuid from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "List item 1",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "List item 2",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "List item 3",
        completed: true
      }
    ]
  };

  constructor(props) {
    super(props);
    this.markComplete = this.markComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    todo.id = uuid.v4();

    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  deleteTodo(todoId) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id != todoId;
      })
    })
  }

  markComplete(todoId) {
    this.setState({
      "todos": this.state.todos.map((todo) => {
        if(todo.id === todoId) {
          todo.completed = !todo.completed;
        };
        return todo;
      })
    });    
  }

  render() {
    return (
      <div>
        <Nav />

        <div className="container">
          <AddToDoItem adtodo={this.addTodo} />

          <ToDoList todos={this.state.todos} markcomplete={this.markComplete} deletetodo={this.deleteTodo} />
        </div>
      </div>
    );
  }

}

export default App;