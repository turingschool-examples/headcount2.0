import React, { Component } from 'react';

const Search = ({ findSchool }) => {
    return (
      <div>
        <input className='search-bar' placeholder="Search for school..." />
        <button className='submit'
        onClick= { e => findSchool(e.target.value) }>
          Submit
        </button>
      </div>
    )
}

export default Search;
