import React, { MouseEventHandler } from 'react'

import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

interface Props {
  toggleTheme: MouseEventHandler<HTMLImageElement>
  theme: string
}

export const Header = ({ toggleTheme, theme }: Props) => {
  const icon = theme === 'dark' ? sun : moon

  return (
    <header className='header flex ai-center'>
      <h1 className='header__title' >TODO</h1>
      <img className='header__icon' src={icon} alt="" onClick={toggleTheme} />
    </header>
  )
}
