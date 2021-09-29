import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [{todo:"Do homework",id:uuidv4() },{todo:"Feed the dog",id:uuidv4()},{todo:"Water the flowers",id:uuidv4()}]
        }
    }

    addTodo = (item) => {
        this.setState({todos: [...this.state.todos, item]});
    }

    removeTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    
    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id} 
                todo = {todo.todo}
                id={todo.id}
                removeTodo={this.removeTodo}
            />
        ))

        return (
            <div>
                <div>
                    <h1>TO-DO LIST</h1>
                    {todos}
                    <NewTodoForm addTodo={this.addTodo} />
                </div>
                
            </div>
        );
    }
}

export default TodoList;
