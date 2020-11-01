import React, { useState, useEffect, useRef } from 'react';

// need to pass in the properties of the todo list items to be able to run the props.onSubmit
const TodoForm = (props) => {
    // if edit is true, return the props.edit.value, or ""
    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    // allows useEffect which runs on page reload to focus in on the text box
    const focusRef = useRef(null)

    useEffect(() => {
        focusRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const submitTodoForm = (event) => {
        event.preventDefault();

        // props of my todo list items
        props.onSubmit({
            id: Math.floor(Math.random() * 10000 + 1),
            text: input
        })
        setInput('')
    }

    return (
        <div>
            <form className="todo-form" onSubmit={submitTodoForm}>
                {props.edit ? (
                    <>
                        <input type="text" placeholder="Add Edit" value={input}
                            name="text" className="todo-input edit"
                            onChange={handleChange}
                            ref={focusRef}
                        />
                        <button className="todo-button edit" type="submit">Update</button>
                    </>
                ) : (
                        <>
                            <input type="text" placeholder="Add Todo" value={input}
                                name="text" className="todo-input"
                                onChange={handleChange}
                                ref={focusRef}
                            />
                            <button className="todo-button" type="submit">Add Todo</button>
                        </>
                    )}
            </form>
        </div>
    )
}

export default TodoForm