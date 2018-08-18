import React from 'react'
import './Search.css'

const Search = ({updateCards}) => {
  return(
    <input
      type="text"
      placeholder="search"
      className="searchBar"
      onChange={(e) => updateCards(e.target.value)}
    />
  )
}

export default Search