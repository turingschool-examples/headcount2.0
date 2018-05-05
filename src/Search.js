import React from 'react';
import DistrictRepository from './helper';
import PropTypes from 'prop-types';

const Search = ({ changeData }) => {
    return (
      <form> 
        <input 
          type="text"
          onChange={ changeData }
        />
      </form>
    )
}

Search.propTypes = {
  changeData: PropTypes.func
}

export default Search;