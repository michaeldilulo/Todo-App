import React, { useState, useEffect, useRef } from 'react';

// Properties of the Todo for my Todo Object
const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    const focusRef = useRef(null)

    useEffect(() => {
        focusRef.current.focus()
    })

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
                {props.edit ? (
                    <>
                        <input type="text" placeholder="Add Edit" value={input}
                            name="text" className="todo-input edit"
                            // onChange deals with inputs 
                            onChange={handleChange}
                            ref={focusRef}
                        />
                        <button className="todo-button edit" type="submit">Update</button>
                    </>
                ) : (
                        <>
                            <input type="text" placeholder="Add Todo" value={input}
                                name="text" className="todo-input"
                                // onChange deals with inputs 
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