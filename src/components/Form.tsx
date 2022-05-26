import React, { ChangeEventHandler, FormEventHandler } from 'react'

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>,
  handleInputChange: ChangeEventHandler<HTMLInputElement>,
  inputValue: string,
  theme: string
}

export const Form = ({ handleSubmit, handleInputChange, inputValue, theme }: Props) => {
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input className={`form__input ${theme}`} type='text' placeholder='Create a new todo...' required onChange={handleInputChange} value={inputValue} />
    </form>
  )
}
