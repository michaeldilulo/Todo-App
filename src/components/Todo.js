import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [editTodo, setEditTodo] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(editTodo.id, value)
        setEditTodo({
            id: null,
            value: ''
        })
    }

    // if the editTodo.id is selected, show the form for edit todo
    if (editTodo.id) {
        return <TodoForm editTodo={editTodo} onSubmit={submitUpdate} />
    }

    // Mapping through the todos, and displaying them based off of classes todo-row complete todo-row
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            {/* package for icons, icon below is for delete */}
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                {/* package for  icons, icon below is for the edit */}
                <TiEdit
                    onClick={() => setEditTodo({ id: todo.id, value: todo.text })}
                    className="edit"
                />
            </div>
        </div>
    ))
}

export default Todo