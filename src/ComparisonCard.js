import React from 'react';
import PropTypes from 'prop-types';
import comparisoncardcss from './styles/ComparisonCard.css';

const ComparisonCard = ( { locationOne, locationTwo, averageOne, averageTwo, comparisonData} ) => (
  <article className='comparison-card'>
    <h3 className='location-one'>{locationOne}</h3>
    <h4 className='average-one'>Average: {averageOne}</h4>
    <h2>Compared: {comparisonData}</h2>
    <h3 className='location-two'>{locationTwo}</h3>
    <h4 className='average-two'>Average: {averageTwo}</h4>
  </article>
);

ComparisonCard.propTypes = {
  locationOne: PropTypes.string,
  locationTwo: PropTypes.string,
  averageOne: PropTypes.number,
  averageTwo: PropTypes.number,
  comparisonData: PropTypes.number
};

export default ComparisonCard;
