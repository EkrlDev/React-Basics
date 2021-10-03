import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditedTodoForm from './EditedTodoForm';
import { v4 as uuidv4 } from 'uuid';

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
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    doneTodo = (id) => {
        this.setState({todos: [...this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        })]})
    }

    editTodo = (id) => {
        this.setState({todos: [...this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.editMod = !todo.editMod;
            }
            return todo;
        })]})
    }

    changeTodo = (id,item) => {
        this.setState({todos: [...this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.todo = item;
                todo.editMod = false;
                todo.done = false
            }
            return todo;
        })]})
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
        const todos = this.state.todos.map(todo => 
            {
            if(todo.editMod === false) {
            todo = <Todo
                key={todo.id} 
                todo = {todo.todo}
                id={todo.id}
                removeTodo={this.removeTodo}
                doneTodo = {this.doneTodo}
                editTodo = {this.editTodo}
                state={todo.done}
            />
            } else {
                todo = <EditedTodoForm
                            todo={todo.todo}
                            changeTodo = {this.changeTodo}
                            id= {todo.id} />
            }
            return todo;
            }
            
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
