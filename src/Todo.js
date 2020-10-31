import React from 'react'
import "./Todo.css"

// Destructuring: If you do this, you cannot clg the props
const Todo = ({ title, description }) => {
    return (
        <div className="todo">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Todo