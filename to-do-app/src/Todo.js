import React, { Component } from 'react';

class Todo extends Component {

    
    render() {
        return (
            <div className="Todo">
                <p className={this.props.state ? "Done": ""}>{this.props.todo}</p>
                <button className="done" onClick={() => this.props.doneTodo(this.props.id)}>Done</button>
                <button className="edit" onClick={() => this.props.editTodo(this.props.id)}>Edit</button>
                <button className="delete" onClick={() => this.props.removeTodo(this.props.id)}>Delete</button>
            </div>
        );
    }
}

export default Todo;
