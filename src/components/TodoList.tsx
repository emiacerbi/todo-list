import React, { useState } from 'react'
import Note from '../types'

interface Props {
  todos: Note[],
  setTodos: Function,
}

export const TodoList = ({ todos, setTodos }: Props) => {
  const [filter, setFilter] = useState('all')

  const filters = [
    { type: 'all', content: 'All' },
    { type: 'active', content: 'Active' },
    { type: 'completed', content: 'Completed' }
  ]

  const handleComplete = (id: string) => {
    setTodos(todos.map(prevTodos => prevTodos.id === id ? { ...prevTodos, complete: !prevTodos.complete } : prevTodos))
  }

  const handleDelete = (id: string) => {
    setTodos(todos.filter(prevTodos => prevTodos.id !== id))
  }

  const deleteAllComplete = () => {
    setTodos(todos.filter(prevTodos => prevTodos.complete === false))
  }

  return (
    <>
      <ul className='todo-list' >
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
                <li className='flex ai-center todo-list__list-item ' key={id} >
                  <img src="../../src/assets/icon-check.svg" alt="" />
                  <p className={`todo-list__list-item__text ${todo.complete && 'line-through'}`} onClick={() => handleComplete(id)}>
                    {text}
                  </p>
                  <span onClick={() => handleDelete(id)}>
                    <img className='cross' src="../../src/assets/icon-cross.svg" alt="cross" width={13} />
                  </span>
                </li>
              )
            })
        }

        <div className='todo-list__footer'>
          {
            todos.filter(todo => todo.complete === false).length
          }
          <span>
            items left
          </span>

          <button onClick={deleteAllComplete}>
            Clear completed
          </button>
        </div>
      </ul>

      <footer className='footer'>
        {
          filters.map(fil => {
            const { content, type } = fil
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`footer__btn ${type === filter && 'selected'}`}
              >
                {content}
              </button>
            )
          })
        }
      </footer>
    </>
  )
}
