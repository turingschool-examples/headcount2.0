import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ changeData }) => {
  return (
    <form> 
      <input 
        type="text"
        onChange={ changeData }
      />
    </form>
  );
};

Search.propTypes = {
  changeData: PropTypes.func.isRequired
};

export default Search;