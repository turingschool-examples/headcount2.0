import React from 'react';
import { func } from 'prop-types'

const Search = ({filterSearch}) => {
  return (
    <div className='search-input'>
      <input type="text"
        placeholder="Search Districts"
        onKeyDown={
          (e) => filterSearch(e.target.value)
        }/>
    </div>
  )
}

Search.propTypes = {
  filterSearch: func
}

export default Search;
