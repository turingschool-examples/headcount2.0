import React from 'react'
import Search from '../Search'
import './Header.css'

const Header = () => {
  return(
    <header className="Header">
      <h1>Head
        <span className="count">Count</span>
        <span className="version"> 2.0</span>
      </h1>
      <Search />
    </header>
  )
}

export default Header