import React from 'react';

import '../css/TopArrow.css';

const TopArrow = () => {
  return (
    <div className="top-arrow-container">
      <a href="#page-top">
        <img src="./up-arrow.svg" alt="up-arrow"/>
      </a>
    </div>
  );
};

export default TopArrow;