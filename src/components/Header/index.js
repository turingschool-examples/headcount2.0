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
      <h2>Click on two districts below to compare averages.</h2>
      <p>If you know the name of the districts you would like to compare,<br /> type them in the search field above to locate them more quickly.</p>
    </header>
  )
}

Header.propTypes = {
  findAllMatches: PropTypes.func.isRequired
}

export default Header