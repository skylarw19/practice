import React, { Component } from 'react';
import Card from './Card.js'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: ["groceries", "laundry", "clean"],
            showForm: false,
            newTodo: "",
        }
    }

    showForm = () =>{
        this.setState({showForm: true})
    }
    
    handleFormInput = (e) => {
        this.setState({newTodo: e.target.value})
    }

    addTodo = (e) => {
        e.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.newTodo],
            showForm: false
        })
    }

    render(){
        return (
        <>
            <h1>Todo List</h1>
            <button onClick={this.showForm}>Add Todo</button>
            {this.state.showForm ?
                <form onSubmit={this.addTodo}>
                    <input onChange={this.handleFormInput} placeholder="add a todo item"></input>
                </form> 
            :
            <></>   
            }

            <div className="todo-list">
                {this.state.todos.map((todo, i) =>
                    <Card
                        key={i}
                        todo={todo}
                    />
                )}
            </div>
        </>
        );
    }
}

export default TodoList;
