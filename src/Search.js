import React from 'react';

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

export default Search;
