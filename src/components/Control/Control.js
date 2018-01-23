import React from 'react';

const Control = () => {
  return (
    <div className="Control">
      <div className="input-cont">
        <label htmlFor="search"></label>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text"
               id="search"
               placeholder="Search by School"
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