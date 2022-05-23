import React, { ChangeEventHandler, FormEventHandler } from 'react'

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>,
  handleInputChange: ChangeEventHandler<HTMLInputElement>,
  inputValue: string,
}

export const Form = ({ handleSubmit, handleInputChange, inputValue }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Create a new todo...' required onChange={handleInputChange} value={inputValue} />
    </form>
  )
}
