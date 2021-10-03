import React, { Component } from 'react';

class EditedTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo
        }
    }

    handleChange = (evt) => {
        this.setState({todo: evt.target.value});
    }

    handleSubmit = () => {
        this.props.changeTodo(this.props.id, this.state.todo)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="TodoForm">
                        <input 
                            id="todo" 
                            name="todo"
                            defaultValue={this.state.todo} 
                            onChange={this.handleChange}>
                        </input>      
                                    
                        <button>SAVE</button>
                
                </form>
            </div>
        );
    }
}

export default EditedTodoForm;
