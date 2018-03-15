import React from 'react';
import PropTypes from 'prop-types';

const ComparisonCard = ({comparedAverage}) => {
  const [locationNameA, locationNameB, compared] = Object.keys(comparedAverage);

  return (
    <article>
      <h2>{locationNameA}</h2>
      <h4>{comparedAverage[locationNameA]}</h4>
      <h3>Compared Averages: {comparedAverage[compared]}</h3>
      <h2>{locationNameB}</h2>
      <h4>{comparedAverage[locationNameB]}</h4>
    </article>
  );
};	

ComparisonCard.propTypes = {
  comparedAverage: PropTypes.object.isRequired
};


export default ComparisonCard;