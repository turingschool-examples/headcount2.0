import React from 'react';
import PropTypes from 'prop-types';

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

Search.propTypes = {
  searchLocations: PropTypes.func
};