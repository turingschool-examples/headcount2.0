import React from 'react';

const Control = (props) => {

  return (
    <div className="Control">
      <div className="input-cont">
        <label htmlFor="search"></label>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text"
               id="search"
               placeholder="Search by School"
               onChange={(e) => props.handleSearch(e)}
        />
        <label htmlFor="submit"></label>
        <input type="submit"
               id="submit"
        />
      </div>
      <h1>Education Colorado</h1>
    </div>
  )
}

export default Control;