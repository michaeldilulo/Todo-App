import React, { useState } from 'react'
import TodoForm from "./TodoForm"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // can utilize that if a letter is not typed in it doesn't submit
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        // newTodos is todo that will be added, and ...todos spreads out the array to add todos
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    return (
        <div>
            <h2>Tackle these tasks lets GOOOO!</h2>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList;