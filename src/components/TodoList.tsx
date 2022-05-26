import React, { Dispatch, SetStateAction, useState } from 'react'
import Note from '../types'
import { Footer } from './Footer'

import { ReactSortable } from 'react-sortablejs'

interface Props {
  todos: Note[]
  setTodos: Dispatch<SetStateAction<Note[]>>
  theme: string
}

export const TodoList = ({ todos, setTodos, theme }: Props) => {
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
      <div className={`todo-list ${theme}`}>
        {/* @ts-ignore */}
        <ReactSortable
          list={todos}
          setList={setTodos}
          animation={200}
          delay={2}
        >
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
                  <div key={id} className='flex ai-center todo-list__list-item'>
                    <div className={`todo-list__list-item__check ${theme}`} onClick={() => handleComplete(id)}>
                      <div className={`check-wrapper ${todo.complete && 'checked'} ${theme} `}>
                        {
                          todo.complete &&
                            <img src="../../src/assets/icon-check.svg" alt="" />
                        }
                      </div>
                    </div>
                    <p
                      className={`todo-list__list-item__text ${todo.complete && 'line-through'} ${theme}` }
                      onClick={() => handleComplete(id)}
                    >
                      {text}
                    </p>
                    <span onClick={() => handleDelete(id)}>
                      <img className='cross' src="../../src/assets/icon-cross.svg" alt="cross" width={13} />
                    </span>
                  </div>
                )
              })
          }
        </ReactSortable>

        <div className={`todo-list__footer ${theme}`}>
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

      </div>

      <Footer filters={filters} filter={filter} setFilter={setFilter} theme={theme} />

    </>
  )
}
