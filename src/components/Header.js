import React from 'react';
import '../styles/Header.css';
import Nav from './Nav';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = ({search, currentData}) => {
  return (
    <header>
      <div className='header-container'>
        <h1>Welcome to Headcount</h1>
        <Nav search={search}/>
      </div>
    </header>
  )
}

Header.propTypes = {
  search: PropTypes.func
}

export default Header