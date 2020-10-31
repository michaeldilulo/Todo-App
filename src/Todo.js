import React from 'react';
import "./Todo.css"

const Todo = (props) => {
    return (
        <div className="Todo">
            <h2>{props.title}</h2>
            <p>{props.item1}</p>
            <p>{props.item2}</p>
        </div>
    )
}

export default Todo;