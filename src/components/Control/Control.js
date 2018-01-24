import React from 'react';
import PropTypes from 'prop-types';
import './Control.css'

const Control = (props) => {
  return (
    <div className="Control">
      <div className="input-cont">
        <label htmlFor="search"></label>
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
        <input type="text"
               id="search"
               placeholder="Search by School"
               onChange={(e) => props.handleSearch(e)}
        />
      </div>
      <h1>Education Colorado</h1>
    </div>
  )
}

Control.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Control;