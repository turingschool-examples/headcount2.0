import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import ComparisonCard from './ComparisonCard';

import '../css/Comparison.css';


const Comparison = (props) => {

  return (
    <section 
      className='comparison-container'
      aria-label="district-comparison-section"
    >
      <div 
        className="card-container"
        aria-label="district-comparison-wrapper"
      >
        <Card 
          data={props.selection[0]}
          key={props.selection[0].location}
          processSelection={props.processSelection}
          selection={props.selection}
        />
        <ComparisonCard
          data={props.selection}
          compareDistrictAverages={props.compareDistrictAverages}
        />
        <Card 
          data={props.selection[1]}
          key={props.selection[1].location}
          processSelection={props.processSelection}
          selection={props.selection}
        />
      </div>
      <button
        onClick={() => {
          props.processSelection('close');
        }}
        className="close-btn"
        aria-label="close-comparison-section-button"
      >Close</button>
    </section>
  );
};

Comparison.propTypes = {
  selection: PropTypes.array.isRequired,
  compareDistrictAverages: PropTypes.func.isRequired,
  processSelection: PropTypes.func.isRequired
};

export default Comparison;