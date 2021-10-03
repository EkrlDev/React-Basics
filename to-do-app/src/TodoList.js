import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    addTodo = (item) => {
        this.setState({todos: [...this.state.todos, item]});
    }

    removeTodo = (id) => {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    }

    doneTodo = (id) => {
        this.setState({todos: [...this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        })]})
    }


    changeTodo = (id,item) => {
        this.setState({todos: [...this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, todo: item}
            }
            return todo;
        })]})
    }

    

    
    render() {
        const todos = this.state.todos.map(todo => 
            
            todo = <Todo
                key={todo.id} 
                todo = {todo.todo}
                id={todo.id}
                removeTodo={this.removeTodo}
                doneTodo = {this.doneTodo}
                state={todo.done}
                change ={this.changeTodo}
            /> 
        )

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
