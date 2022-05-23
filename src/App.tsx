import React, { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Note from './types'

function App () {
  const [inputValue, setInputValue] = useState('')

  const [todo, setTodo] = useState<Note[]>([])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputValue)
    const newNote = {
      id: uuid(),
      text: inputValue
    }

    setTodo(todo.concat(newNote))
    setInputValue('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div >

      <header>
        <h1>TODO</h1>
        <span>Icon</span>
      </header>

      <form onSubmit={handleSubmit}>
        <input type='text' required onChange={handleInputChange} value={inputValue} />
      </form>

      <ul>
        {
          todo.map(todo => {
            return (
              <li key={todo.id}>{todo.text}</li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default App
