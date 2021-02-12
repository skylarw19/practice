import React, {useEffect, useState} from 'react'
import AddTodo4 from './AddTodo4'
import './App.css'
import Card from './Card.js'
import Card3 from './Card3.js'

const TodoList4 = () => {
    const [todos, setTodos] = useState([])
    const [showForm, setShowForm] = useState(false)

    const fetchPokemon = async () => {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=5")
        let pokemon = await res.json();
        setTodos(pokemon.results)
    }

    useEffect(() => {
        fetchPokemon();
    }, [])

    const addNewTodo = (newTodo) => {
        setTodos([...todos, {name: newTodo}])
        setShowForm(false)
    }

    const deleteTodo = (idx) => {
        setTodos(todos.filter((todo, i) => i !== idx))
    }

    return (  
        <div className="list">
            <h1>Todo List 4</h1>
            <button onClick={() => setShowForm(true)} >Add Todo</button>
            {showForm ? 
                <AddTodo4 
                    addNewTodo={addNewTodo}
                /> 
            : <></>}
            {todos.map((todo, i) => 
                <Card3 
                    key={i}
                    todo={todo.name}
                    idx={i}
                    deleteTodo={deleteTodo}
                />
            )}
        </div>
    );
}
 
export default TodoList4;