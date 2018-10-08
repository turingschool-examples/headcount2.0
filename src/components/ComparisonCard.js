import React from 'react';
import PropTypes from 'prop-types';

import '../css/ComparisonCard.css';

const ComparisonCard = (props) => {
  let averages = props.compareDistrictAverages(props.data[0].location, 
    props.data[1].location);
  return (
    <article 
      className='comparison-card'
      aria-label='district-comparison-card'
    >
      <section aria-label='district-1-section'>
        <h1 
          className='comparison-school top-school'
          aria-label='district-1-label'
        >
          {props.data[0].location}
        </h1>
        <h1 
          className='comparison-average'
          aria-label="district-1-average-label"
        >
          average
        </h1>
        <p 
          className='district-average'
          aria-label='district-1-average'
        >
          {averages[props.data[0].location]}
        </p>
      </section>
      <section aria-label='compared-data-section'>
        <h1 
          className='compared'
          aria-label='compared-label'
        >
          Compared
        </h1>
        <p 
          className='comparison-data'
          aria-label='comparison-data'
        >
          {averages.compared}
        </p>
      </section>
      <section aria-label='district-2-section'>
        <h1 
          className='comparison-school'
          aria-label='district-2-label'
        >
          {props.data[1].location}
        </h1>
        <h1 
          className='comparison-average'
          aria-label='district-2-average-label'
        >
          average
        </h1>
        <p 
          className='district-average'
          aria-label='district-2-average'
        >
          {averages[props.data[1].location]}
        </p>
      </section>
    </article>
  );
};

ComparisonCard.propTypes = {
  data: PropTypes.array.isRequired,
  compareDistrictAverages: PropTypes.func.isRequired  
};

export default ComparisonCard;