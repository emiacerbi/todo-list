import React, { useState } from 'react'
import Note from '../types'

interface Props {
  todos: Note[],
  setTodos: Function,
}

export const TodoList = ({ todos, setTodos }: Props) => {
  const filters = [
    { type: 'all', content: 'All' },
    { type: 'active', content: 'Active' },
    { type: 'completed', content: 'Completed' }
  ]

  const [filter, setFilter] = useState('all')

  const handleDelete = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleComplete = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, complete: !todo.complete } : todo))
  }

  return (
    <>
      <ul>
        {
          todos
            .filter(todo => filter === 'active'
              ? !todo.complete
              : filter === 'completed'
                ? todo.complete
                : todo)
            .map(todo => {
              const { id, text } = todo
              return (
                <li className='flex ai-center' key={id} >
                  <img src="../../src/assets/icon-check.svg" alt="" />
                  <p onClick={() => handleComplete(id)}>
                    {text}
                  </p>
                  <span onClick={() => handleDelete(id)}>
                    <img src="../../src/assets/icon-cross.svg" alt="" />
                  </span>
                </li>
              )
            })
        }
      </ul>

      <footer>
        {
          filters.map(filter => {
            const { content, type } = filter
            return (
              <button key={type} onClick={() => setFilter(type)}>
                {content}
              </button>
            )
          })
        }
      </footer>
    </>
  )
}
