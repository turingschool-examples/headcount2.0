import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <p>HeadCount2.0</p>
      <Search search={props.search}/>
    </div>
  );
};

Header.propTypes = {
  search: PropTypes.func.isRequired
};

export default Header;