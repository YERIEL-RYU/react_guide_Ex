import React, { Component } from 'react';
import ControllerButtons from './components/ControllerButtons';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import VisibleTodoList from './components/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
        <ControllerButtons />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;