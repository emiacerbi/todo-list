import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Note from './types'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

const initialTodos = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos')!)
  : [{
    id: 'placeholderId',
    text: 'Buy groceries',
    complete: false
  }]

function App () {
  const [inputValue, setInputValue] = useState('')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const [todos, setTodos] = useState<Note[]>(initialTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const toggleTheme = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue.length > 25) {
      alert('Message too long!')
      setInputValue('')
      return
    }

    if (inputValue.trim().length === 0) {
      alert('No empty messages please!')
      setInputValue('')
      return
    }

    const newNote = {
      id: uuid(),
      text: inputValue,
      complete: false
    }

    setTodos(todos.concat(newNote))
    setInputValue('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className={`background ${theme}`}>
      <div className={`container ${theme}`}>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputValue={inputValue} theme={theme}/>
        <TodoList todos={todos} setTodos={setTodos} theme={theme}/>
      </div>

    </div>
  )
}

export default App
