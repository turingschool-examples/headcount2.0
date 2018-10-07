import React from 'react'
import PropTypes from 'prop-types'
import Search from '../Search'
import './Header.css'

const Header = ({findAllMatches}) => {
  return(
    <header className="Header">
      <h1>Head
        <span className="count">Count</span>
        <span className="version"> 2.0</span>
      </h1>
      <Search findAllMatches={findAllMatches} />
    </header>
  )
}

Header.propTypes = {
  findAllMatches: PropTypes.func.isRequired
}

export default Header