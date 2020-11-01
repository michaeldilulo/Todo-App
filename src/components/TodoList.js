import React, { useState } from 'react'
import Todo from './Todo'
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

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArray = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArray)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id == id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h2>Tackle these tasks lets GOOOO!</h2>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList;