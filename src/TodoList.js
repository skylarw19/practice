import React, { Component } from 'react';
import Card from './Card.js'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            showForm: false,
            newTodo: "",
        }
    }

    async componentDidMount() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=5")
        const pokemon = await res.json();
        this.setState({todos: pokemon.results})
        console.log(this.state.todos)
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
            todos: [...this.state.todos, {name: this.state.newTodo}],
            showForm: false
        })
    }

    deleteTodo = (idx) => {
        this.setState({
            todos: this.state.todos.filter((todo, i) => i !== idx)
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
                        todo={todo.name}
                        idx={i}
                        deleteTodo={this.deleteTodo}
                    />
                )}
            </div>
        </>
        );
    }
}

export default TodoList;
