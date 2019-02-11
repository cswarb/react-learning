import React from 'react';

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.isCompleted = this.isCompleted.bind(this);
        this.itemComplete = this.itemComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    render() {
        const {title, id, completed} = this.props.todo;

        return (
            <div style={this.isCompleted(this.props.todo)}>
                <input name={this.props.todo.title.split(" ").join("").trim()} 
                    type="checkbox" 
                    checked={completed}
                    onChange={this.itemComplete.bind(this, id)} />
                <p>{title}</p>
                <button className="btn btn-danger" onClick={this.deleteTodo.bind(this, id)}>Delete</button>
            </div>
        )
    }

    itemComplete(todoId) {
        this.props.markcomplete(todoId);
    }

    deleteTodo(todoId) {
        this.props.deletetodo(todoId);
    }

    isCompleted(todo) {
        return {
            backgroundColor: todo.completed ? "green" : "red",
            textDecoration: todo.completed ? "line-through" : "none"
        };
    }

}