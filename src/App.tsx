import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Note from './types'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

function App () {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState<Note[]>([])

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
    <div className='container'>
      <Header />
      <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputValue={inputValue} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
