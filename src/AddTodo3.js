import React, {useState} from 'react'

const AddTodo3 = (props) => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(value)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={e => setValue(e.target.value)} ></input>
        </form>
        </>
    )
}

export default AddTodo3


