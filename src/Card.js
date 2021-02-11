import React, { Component } from 'react';


const Card = (props) => {
    return (  
        <div className="card">
            <input type="checkbox"></input>
            <label>{props.todo}</label>
            <button>Delete</button>
        </div>
    );
}
 
export default Card;