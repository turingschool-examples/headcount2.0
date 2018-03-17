import React from 'react';
import './Search.css';
import PropTypes from 'prop-types';

const Search = ({searchDistrict, searchValue, clearSearch}) => {
  return (
    <div>
      <div className="Header">
        <form className="Search">
          <h1>Headcount 2.0</h1>
          <input 
            value={searchValue}
            onChange={searchDistrict}
            type="search"
            className="Search-bar"
            placeholder="Enter school district" />
          <button
            onClick={clearSearch}
            className="Search-btn">
            CLEAR
          </button>
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  searchDistrict: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  clearSearch: PropTypes.func.isRequired
};

export default Search;