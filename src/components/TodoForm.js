import React, { useState } from 'react';

const TodoForm = () => {
    const [input, setInput] = useState('')

    return (
        <div>
            <form className="todo-form">
                <input type="text" placeholder="Add Todo" value={input}
                    name="text" className="todo-input"
                />
                <button className="todo-button">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm