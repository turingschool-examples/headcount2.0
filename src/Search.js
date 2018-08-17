import React from 'react';

const Search = ({ searchLocations }) => {
  return (
    <input 
      className='Search'
      placeholder='SEARCH'
      onChange={searchLocations}>
    </input>
  );
};

export default Search;