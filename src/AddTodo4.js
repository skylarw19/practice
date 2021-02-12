import React, {useState} from 'react'

const AddTodo4 = (props) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value)
        props.addNewTodo(value)
    }

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setValue(e.target.value)}></input>
            </form>
        </div>
    );
}
 
export default AddTodo4;