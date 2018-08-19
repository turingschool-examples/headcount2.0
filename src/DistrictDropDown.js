import React from 'react';
import PropTypes from 'prop-types';

const DistrictDropDown = ({ toggleDropDown }) => {
  return (
    <div className="dropdown">
      <h1 
        onClick={ () => toggleDropDown() } 
        className='CardContainer__header'>
          KINDERGARTNERS IN FULL DAY PROGRAM
      </h1>
      <ul onClick={ () => toggleDropDown() } className="dropdown-content">
        <li>3RD GRADE TESTS</li>
        <li>8TH GRADE TEST SCORES</li>
        <li>AVERAGE RACE ETHINICITY MATH SCORES</li>
        <li>AVERAGE RACE ETHINICITY READING SCORES</li>
        <li>AVERAGE RACE ETHINICITY WRITING SCORES</li>
        <li>DROPOUT RATES BY RACE AND ETHINICITY</li>
        <li>HIGH SCHOOL GRADUATION RATES</li>
      </ul>
    </div>
  );
};

export default DistrictDropDown;

DistrictDropDown.propTypes = {
  toggleDropDown: PropTypes.func
};

