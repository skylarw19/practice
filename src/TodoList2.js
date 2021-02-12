import React, { Component } from 'react';
import Card from './Card.js'
import AddTodo2 from './AddTodo2.js'

class TodoList2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
            showForm: false,
        }
    }

    async componentDidMount() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=5")
        const pokemon = await res.json();
        this.setState({todos: pokemon.results})
        console.log(this.state.todos)
    }

    showAddTodo = () => {
        this.setState({showForm: true})
    }

    addNewTodo = (newTodo) => {
        console.log(newTodo)
        this.setState({
            todos: [...this.state.todos, {name: newTodo}],
            showForm: false,
        })
    }

    render(){
        return (
        <>
            <h1>Todo List 2</h1>
            <button onClick={this.showAddTodo} >Add Todo</button>
            {this.state.showForm ?
                <AddTodo2
                    addNewTodo={this.addNewTodo}
                />
            :
                <></>
            }
            <div className="todo-list">
                {this.state.todos.map((todo, i) =>
                    <Card
                        key={i}
                        todo={todo.name}
                        idx={i}    
                    />
                )}
            </div>
        </>
        );
    }
}

export default TodoList2;