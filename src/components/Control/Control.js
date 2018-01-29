import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

const Control = ({searchError, handleSearch}) => {
  let searchClass = searchError ? 'error' : '';
  
  return (
    <header className="Control">
      <div className="input-cont">
        <i 
          className="fa fa-search search-icon" 
          aria-hidden="true">
        </i>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Search by School"
          onChange={(event) => handleSearch(event.target.value)}
          className={searchClass}
        />
      </div>
      <h1>Education Colorado</h1>
    </header>
  );
};

const { func, bool } = PropTypes;
Control.propTypes = {
  searchError: bool.isRequired,
  handleSearch: func.isRequired
};

export default Control;