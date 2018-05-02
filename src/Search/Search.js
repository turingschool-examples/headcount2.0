import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <form action="" className="district-form">
      <input 
        type="text" 
        className="district-input" 
        placeholder="Search Districts"
        onChange={(event) => props.handleSearchEvent(event)}
      />
    </form>
  );
}

export default Search;