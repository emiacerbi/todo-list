import React, { Dispatch, SetStateAction, useState } from 'react'
import Note from '../types'
import { Footer } from './Footer'

interface Props {
  todos: Note[],
  setTodos: Dispatch<SetStateAction<Note[]>>,
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

      {/* <ul className='todo-list' > */}
      <ul className='todo-list'>
        {
          todos
          // .filter(todo => filter === 'active'
          //   ? !todo.complete
          //   : filter === 'completed'
          //     ? todo.complete
          //     : todo)
            .map(todo => {
              // const { id, text } = todo
              return (
                <li key={todo.id} className='flex ai-center todo-list__list-item'>
                  <img src="../../src/assets/icon-check.svg" alt="" onClick={() => handleComplete(todo.id)}/>
                  <p className={`todo-list__list-item__text ${todo.complete && 'line-through'}` }>
                    {todo.text}
                  </p>
                  <span onClick={() => handleDelete(todo.id)}>
                    <img className='cross' src="../../src/assets/icon-cross.svg" alt="cross" width={13} />
                  </span>
                </li>
              )
            })
        }
      </ul>

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

      <Footer filters={filters} filter={filter} setFilter={setFilter} />

    </>
  )
}
