import React, { Component } from 'react';

const Search = ({ findSchool }) => {
    return (
      <div>
        <input onChange={ e => findSchool(e.target.value) } className='search-bar' placeholder="Search for school..." />
      </div>
    )
}

export default Search;
