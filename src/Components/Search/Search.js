import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ updateRepoInState }) => {
  return (
    <div className="search-container">
      <input 
        placeholder="Search for a district..."
        className="search"
        onChange={ (e) => updateRepoInState(e.target.value) }
      />
    </div>
  );

}

Search.propTypes = {
  updateRepoInState: PropTypes.func.isRequired
}

export default Search;
