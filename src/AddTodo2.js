import React from 'react'
import {useState} from 'react'

const AddTodo = (props) => {
    
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewTodo(value)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={e => setValue(e.target.value)} placeholder="add a new todo item" ></input>
        </form>
        </>
    );
}

export default AddTodo;
