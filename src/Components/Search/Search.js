import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ( {handleSearch} ) => {
  return (
      <div>
        <input 
        onChange={ (e) => handleSearch(e.target.value) }/>
      </div>
    )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search;