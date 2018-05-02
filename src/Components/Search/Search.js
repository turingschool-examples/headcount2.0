import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ( {handleSearch} ) => {
  return (
      <div className="search-container">
        <input 
        placeholder="Search for district..."
        className="search"
        onChange={ (e) => handleSearch(e.target.value) }/>
      </div>
    )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search;