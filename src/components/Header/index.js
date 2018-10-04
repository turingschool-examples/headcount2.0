import React from 'react'
import Search from '../Search'
import './Header.css'

const Header = () => {
  return(
    <header className="Header">
      <h1>HeadCount 2.0</h1>
      <Search />
    </header>
  )
}

export default Header