import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import AddTodo from './components/AddTodo.jsx'



function App() {

  return (
    <>
      <h1 className='text-3xl font-extrabold'>Learn About Redux Tool Kit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
