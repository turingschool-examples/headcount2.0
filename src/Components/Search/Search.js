import React from 'react';
import PropTypes from 'prop-types';

const Search = ( {handleSearch} ) => {
  return (
      <div>
        <input 
        //value given should be the user input
        onChange={ (e) => handleSearch(e.target.value) }/>
      </div>
    )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search;