import React from 'react'

// import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

export const Header = () => {
  return (
    <header className='header flex ai-center'>
      <h1 className='header__title' >TODO</h1>
      <img className='header__icon' src={sun} alt=""/>
    </header>
  )
}
