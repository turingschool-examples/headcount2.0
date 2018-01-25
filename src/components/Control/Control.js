import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

const Control = (props) => {
  return (
    <div className="Control">
      <div className="input-cont">
        <label htmlFor="search"></label>
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
        <input
          type="text"
          id="search"
          placeholder="Search by School"
          onChange={(event) => props.handleSearch(event)}
        />
      </div>
      <h1>Education Colorado</h1>
    </div>
  );
};

const { func } = PropTypes;
Control.propTypes = {
  handleSearch: func.isRequired
};

export default Control;