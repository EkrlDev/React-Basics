import React, { Component } from 'react';

class Todo extends Component {

    
    render() {
        return (
            <div className="Todo">
                <p>{this.props.todo}</p>
                <button className="done">Done</button>
                <button className="edit">Edit</button>
                <button className="delete" onClick={() => this.props.removeTodo(this.props.id)}>Delete</button>
            </div>
        );
    }
}

export default Todo;
