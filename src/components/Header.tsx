import React from 'react'

import moon from '../assets/icon-moon.svg'
// import sun from '../assets/icon-sun.svg'

export const Header = () => {
  return (
    <header className='flex ai-center'>
      <h1>TODO</h1>
      <img src={moon} alt=""/>
    </header>
  )
}
