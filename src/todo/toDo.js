import React from 'react';
import { ToDoItem } from "./toDoItem";

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const items = this.props.todos.map((todo, index) => (
            <ToDoItem key={index} todo={todo} markcomplete={this.props.markcomplete} deletetodo={this.props.deletetodo} />
        ));

        return(
            <div>
                {items}
            </div>
        );
    }

}