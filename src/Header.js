import React from 'react';
import Search from './Search';

const Header = (props) => {
  return (
    <div>
      <p>HeadCount2.0</p>
        <Search search={props.search}/>
    </div>
  )
};

export default Header;