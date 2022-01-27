import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            todo: this.props.todo
        }
    }

    editTodo = (id) => {
        this.setState({
            isEditing: true
        })
    }

    handleChange = (evt) => {
        evt.preventDefault()
        this.setState({todo: evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.change(this.props.id,this.state.todo);
        this.setState({
            isEditing: false
        })
    }

    render() {
        let result;
        if (this.state.isEditing === false) {
           result = (<div className="Todo">
                        <p className={this.props.isCompleted ? "Done": ""}>{this.props.todo}</p>
                        <button className="done" onClick={() => this.props.doneTodo(this.props.id)}>Done</button>
                        <button className="edit" onClick={this.editTodo}>Edit</button>
                        <button className="delete" onClick={() => this.props.removeTodo(this.props.id)}>Delete</button>
                    </div>) 
        } else {
            result = (<div>
                        <form onSubmit={this.handleSubmit} className="TodoForm">
                            <input 
                                value={this.state.todo} 
                                onChange={this.handleChange}>
                            </input>      
                                
                            <button>SAVE</button>
                        </form>
                    </div>)
        }
        return result;
    }
}

export default Todo;
