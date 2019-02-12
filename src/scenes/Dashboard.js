import React from 'react';
import Axios from 'axios';
import { ToDoList } from "../todo/toDo.js";
import { AddToDoItem } from "../todo/addToDoItem.js";
import uuid from "uuid";

export class Dashboard extends React.Component {
    state = {
        todos: [
            
        ]
    };

    constructor(props) {
        super(props);
        this.markComplete = this.markComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15").then((res) => {
            this.setState({
                todos: res.data
            });
        }).catch((err) => {

        });
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
                return todo.id !== todoId;
            })
        })
    }

    markComplete(todoId) {
        this.setState({
            "todos": this.state.todos.map((todo) => {
                if (todo.id === todoId) {
                    todo.completed = !todo.completed;
                };
                return todo;
            })
        });
    }

    render() {
        return (
            <React.Fragment>
                <AddToDoItem adtodo={this.addTodo} />
                <ToDoList todos={this.state.todos} markcomplete={this.markComplete} deletetodo={this.deleteTodo} />
            </React.Fragment>
        );
    }

}