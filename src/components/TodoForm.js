import React, { useState } from 'react';

// Properties of the Todo for my Todo Object
const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const submitTodoForm = (event) => {
        event.preventDefault();

        // Able to access the props of the todo
        props.onSubmit({
            id: Math.floor(Math.random() * 10000 + 1),
            text: input
        })
        /* setInput to empty string: This clears out the input field when you
        submit the form
        */
        setInput('')
    }

    return (
        <div>
            <form className="todo-form" onSubmit={submitTodoForm}>
                <input type="text" placeholder="Add Todo" value={input}
                    name="text" className="todo-input"
                    // onChange deals with inputs 
                    onChange={handleChange}
                />
                <button className="todo-button" type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm