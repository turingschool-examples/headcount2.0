import React from 'react';
import './Search.css';
import PropTypes from 'prop-types';

const Search = ({searchDistrict, searchValue, clearSearch}) => {
  return (
    <div>
      <input 
        value={searchValue}
        onChange={searchDistrict}
        type="search"/>
      <button
        onClick={clearSearch}
      >CLEAR</button>
    </div>
  );
};

Search.propTypes = {
  searchDistrict: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  clearSearch: PropTypes.func.isRequired
};

export default Search;