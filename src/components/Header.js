import React from 'react';
import '../styles/Header.css';
import Nav from './Nav';

const Header = ({search}) => {
  return (
    <header>
      <h1>Welcome to Headcount</h1>
      <Nav search={search}/>
    </header>
  )
}

export default Header