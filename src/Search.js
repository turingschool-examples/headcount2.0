import React from 'react';

const Search = ({filterSearch}) => {
  return (
    <div className='search-input'>
      <input type="text"
        placeholder="Search"
        onKeyDown={
          (e) => filterSearch(e.target.value)
        }/>
      <input type="submit" />
    </div>
  )
}

export default Search;
