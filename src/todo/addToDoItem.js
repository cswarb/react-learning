import React from 'react';

export class AddToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
    }

    addItem() {
        var item = new ToDoItem();
        item.title = this.state.title;
        this.props.adtodo(item);
    }

    updateText = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateText} />
                <button className="btn btn-success" onClick={this.addItem.bind(this)}>Add Item</button>
            </div>
        )
    }

}

export class ToDoItem {
    title = "";
    id = null;
    completed = false;

    constructor() {

    }
}