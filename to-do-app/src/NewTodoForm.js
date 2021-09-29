import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleClick = (evt) => {
        evt.preventDefault();
        const newTodo = {...this.state, id: uuidv4()}
        this.props.addTodo(newTodo)
        this.setState({
            todo: ""
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="TodoForm">
                <input 
                    placeholder="Write Your Todo Here"
                    id="todo" 
                    name="todo"
                    value={this.state.todo} 
                    onChange={this.handleChange}>
                </input>      
                                    
                <button onClick={this.handleClick}>ADD TODO</button>
                
                </form>
            </div>
        );
    }
}

export default NewTodoForm;
