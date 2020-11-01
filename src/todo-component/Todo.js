import React from 'react'
import "../todo-component/Todo.css"

const Todo = (props) => {

    return (
        <div className="todo">
            <p>{props.title}</p>
        </div>
    )
}

export default Todo