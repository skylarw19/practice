import React, { Component } from 'react';
import Card from './Card.js'
import Card3 from './Card3.js'
import AddTodo3 from './AddTodo3.js'

class TodoList3 extends Component {
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

    setShowForm = () => {
        this.setState({showForm: true})
    }

    addTodo = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, {name: newTodo}],
            showForm: false
        })

    }

    deleteTodo = (idx) => {
        let todosCopy = this.state.todos.filter((todo, i) => i !== idx)
        this.setState({
            todos: todosCopy
        })

        //either solution works
        // this.setState({
        //     todos: this.state.todos.filter((todo, i) => i !== idx)
        // })
    }

    render(){
        return (
        <>
            <h1>Todo List 3</h1>
            <button onClick={this.setShowForm} >Add a new Todo</button>
            {this.state.showForm ?
                <AddTodo3 
                    addTodo={this.addTodo}
                />
                :
                <></>
            }

            <div className="todo-list">
                {this.state.todos.map((todo, i) =>
                    <Card3
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

export default TodoList3;