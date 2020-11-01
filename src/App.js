import React, { useState } from 'react';
import './App.css';
import Todo from './todo-component/Todo';

const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleSubmission = (event) => {
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="app">

      <h2>Todo Application</h2>

      <form>
        <input type="text" placeholder="Input Todo Here" value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit" onClick={handleSubmission}>Add Todo</button>
      </form>

      <h3>Todos for the day</h3>

      {
        // Not the preferred way to do it with index, but is a way to do it.
        todos.map((todo, id) => {
          return (
            <Todo title={todo} key={id} />
          )
        })
      }

    </div>
  );
}

export default App;
