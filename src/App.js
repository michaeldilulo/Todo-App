import Todo from './Todo';
import './App.css';
import { useState } from 'react';

function App() {

  // short term memory
  // call the list: todos, need a way of updating list: setTodos
  const [todos, setTodos] = useState([
    {
      title: "Take out the trash",
      description: "The bin man comes at 9PM"
    },
    {
      title: "Walk the dog",
      description: "She is bored"
    },
    {
      title: "Go Food shopping",
      description: "No food in the fridge"
    }
  ])

  return (
    <div className="app">
      {
        todos.map((todo) => (
          <Todo title={todo.title} description={todo.description} />
        ))
      }
    </div>
  );
}

export default App;
