import React from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';

const Header = (props) => {
  return (
    <header id="page-top">
      <img className='logo' src="./brain-and-head.svg" alt="logo" />
      <h1 className='banner-title'>Colorado Kindercount</h1>
      <img 
        className='info-btn'
        src='./information.svg'
        alt='info-button'
        onClick={() => {
          props.toggleModal();
        }}
      />
      <InputField 
        processFilter={props.processFilter}
      />
    </header>
  );
};

Header.propTypes = {
  processFilter: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default Header;