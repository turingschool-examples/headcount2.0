import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types'

const Search = ({ findSchool }) => {
    return (
      <div>
        <input onChange={ e => findSchool(e.target.value) } className='search-bar' placeholder="Search for school..." />
      </div>
    )
}

Search.propTypes = {
  findSchool: func
}

export default Search;
