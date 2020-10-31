import Todo from './Todo';
import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])
  // sets up the initial input as empty
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    // spread the todos array and add our input to it
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="app">

      <form>
        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
        <button disabled={!input} onClick={handleSubmit} type="submit">Add Todo</button>
      </form>

      {

        // when we removed the object, we need to remove todo.title 
        todos.map((todo) => (
          // key needs to be added, to keep from having an error
          <Todo title={todo} key={todo} />
        ))
      }
    </div>
  );
}

export default App;
