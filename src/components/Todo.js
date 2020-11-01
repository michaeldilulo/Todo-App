import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    // 
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

    if (editTodo.id) {
        return <TodoForm editTodo={editTodo} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />
                <TiEdit
                    onClick={() => setEditTodo({ id: todo.id, value: todo.text })}
                    className="edit"
                />
            </div>
        </div>
    ))
}

export default Todo