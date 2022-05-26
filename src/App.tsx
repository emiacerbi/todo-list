import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Note from './types'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

function App () {
  const [inputValue, setInputValue] = useState('')
  const [theme, setTheme] = useState<string>('dark')
  const [todos, setTodos] = useState<Note[]>([{
    id: 'randomId',
    text: 'Go to the gym',
    complete: false
  },
  {
    id: 'randomId2',
    text: 'Buy groceries',
    complete: false
  }])

  const toggleTheme = () => {
    theme === 'dark'
      ? setTheme('light')
      : setTheme('dark')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue.length > 20) {
      alert('Message too long!')
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
