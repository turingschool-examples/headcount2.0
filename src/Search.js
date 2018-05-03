import React from 'react';
import DistrictRepository from './helper';

// const district = new DistrictRepository;

const Search = ({ changeData }) => {
    return (
      <form> 
        <input 
          type="text"
          onChange={ changeData }
        />
        <button>Search</button>
      </form>
    )
}

export default Search;