import React from 'react';
import './App.css';
// changed import from TodoForm to TodoList
import TodoList from './components/TodoList';

const App = () => {

  return (
    <div className="app">
      {/* <TodoForm /> */}
      <TodoList />
    </div>
  );
}

export default App;
