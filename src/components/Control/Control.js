import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

const Control = (props) => {
  let searchError = props.searchError ? 'error' : ''; 
  
  return (
    <header className="Control">
      <div className="input-cont">
        <label htmlFor="search"></label>
        <i 
          className="fa fa-search search-icon" 
          aria-hidden="true">
        </i>
        <input
          type="text"
          id="search"
          placeholder="Search by School"
          onChange={(event) => props.handleSearch(event.target.value)}
          className={searchError}
        />
      </div>
      <h1>Education Colorado</h1>
    </header>
  );
};

const { func, string } = PropTypes;
Control.propTypes = {
  searchError: string.isRequired,
  handleSearch: func.isRequired
};

export default Control;