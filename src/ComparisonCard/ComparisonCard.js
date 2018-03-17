import React from 'react';
import PropTypes from 'prop-types';
import './ComparisonCard.css';

const ComparisonCard = ({comparedAverage}) => {
  const [locationNameA, locationNameB, compared] = Object.keys(comparedAverage);

  return (
    <article className="comparison-card">
      <header>
        <h2 className="comparison__h2">{locationNameA}</h2>
        <h4 className="percent">{comparedAverage[locationNameA]}%</h4>
      </header>
      <main>
        <h3 className="comparedAverage__text">Compared Averages: </h3>
        <p className="comparedAverage__num"> {comparedAverage[compared]} </p>
      </main>
      <footer>
        <h2 className="comparison__h2">{locationNameB}</h2>
        <h4 className="percent">{comparedAverage[locationNameB]}%</h4>
      </footer>
    </article>
  );
};	

ComparisonCard.propTypes = {
  comparedAverage: PropTypes.object.isRequired
};

export default ComparisonCard;