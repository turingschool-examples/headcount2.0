import React from 'react';

import '../css/TopArrow.css';

const TopArrow = () => {
  return (
    <div 
      className="top-arrow-container"
      aria-label='top-of-page-link-wrapper'
    >
      <a 
        href="#page-top"
        aria-label='top-of-page-link'
      >
        <img
          src="./up-arrow.svg" 
          alt="up-arrow"
        />
      </a>
    </div>
  );
};

export default TopArrow;