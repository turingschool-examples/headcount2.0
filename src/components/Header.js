import React from 'react';
import '../styles/Header.css';
import Nav from './Nav';
import PropTypes from 'prop-types';

const Header = ({search}) => {
  return (
    <header>
      <h1>Welcome to Headcount</h1>
      <Nav search={search}/>
    </header>
  )
}

Header.propTypes = {
  search: PropTypes.func
}

export default Header