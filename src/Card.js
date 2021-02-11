import React, { Component } from 'react';


const Card = (props) => {
    return (  
        <div className="card">
            <input type="checkbox"></input>
            <label>{props.todo}</label>
            <button 
                onClick={() => props.deleteTodo(props.idx)}
            >Delete</button>
        </div>
    );
}
 
export default Card;