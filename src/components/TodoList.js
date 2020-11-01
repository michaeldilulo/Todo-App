import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from "./TodoForm"

const TodoList = () => {
    // [] = todos is stateful value, setTodos is the function to update it, and useState is the hook
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // If there is a large amount of white space in the todo app, account for it
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        // create newTodo as a todo, and spread the array out to set the new Todo as the todo
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    // id = todoId and newValue is what is being placed in the input field
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        // map through the previous todo items, check to see if item.id === todoId your editing, if true return the new value if false return the old value
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        // filtering in the array, removing the value selected and keeping the rest of it
        const removeArray = [...todos].filter(todo => todo.id !== id)

        // call setTodos in the state with all todos minus the one that was deleted
        setTodos(removeArray)
    }

    const completeTodo = id => {
        // map through the todos array, if todo.id === id that you selected, add the CSS class complete for the line through and shallow color
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        });
        // call setTodos with the updated todos
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h2 className="todo-row">Todo List</h2>
            {/* Form is submitting with the props values of id and text name */}
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