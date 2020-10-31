import React from 'react'
import "./Todo.css"

const Todo = (props) => {
    return (
        <div className="todo">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Todo