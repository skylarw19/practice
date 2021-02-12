import React from 'react'

const Card3 = (props) => {

    const handleClick = (e) =>{
        e.preventDefault()
        if (e.target.checked){
            props.deleteTodo(props.idx)
        }
    }

    return (  
        <div className="card">
            <input onClick={handleClick} type="checkbox"></input>
            <label>{props.todo}</label>
            <button>Delete</button>
        </div>
    );
}
 
export default Card3;