import React from 'react'
import Search from '../Search'
import './Header.css'

const Header = ({findAllMatching}) => {
  return(
    <header className="Header">
      <h1>Head
        <span className="count">Count</span>
        <span className="version"> 2.0</span>
      </h1>
      <Search findAllMatching={findAllMatching} />
    </header>
  )
}

export default Header