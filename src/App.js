import Header from './components/Header';
import TodoList from './components/TodoList';
import './styles/App.css';
import React, { useEffect, useState } from 'react'

const todoList = [
  {
    id:1,
    text: "TaskFlow Manager",
    completed: false
  },

  {
    id:new Date().getTime(),
    text:"use uuid",
    completed: false
  }
]

function App() {
const [todos, setTodos] = useState (JSON.parse(localStorage.getItem("todos")) || todoList)

useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos))
 
}, [todos])

  return <div className='container'  >
    <Header setTodos ={setTodos} todos={todos} /> 
    <TodoList todos={todos} setTodos ={setTodos}/>
  </div>;
}
export default App;
