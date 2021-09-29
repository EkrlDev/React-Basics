import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList.js';


class App extends Component {
  render() {
    return (
      <div className="Flipper">
        <TodoList />
      </div>
    );
  }
}

export default App;



