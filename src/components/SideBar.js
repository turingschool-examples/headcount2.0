import React from 'react'
import Search from './Search'
import SideBarCards from './SideBarCards'

const SideBar = () => {

  //controller for managing what cards are showing based on search

  return (
    <div className="sidebar-container">
      <Search />
      <SideBarCards />
    </div>
  )
};

export default SideBar;
