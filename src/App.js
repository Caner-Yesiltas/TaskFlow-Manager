import Header from './components/Header';
import TodoList from './components/TodoList';
import './styles/App.css';
import React, { useState } from 'react'
function App() {
const [todos, setTodos] = useState ([])



  return <div className='container'  >
    <Header setTodos ={setTodos} todos={todos} /> 
    <TodoList todos={todos} />
  </div>;
}
export default App;
