import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Comparison = ({comparisonData, handleCompareCards, removeComparison}) => {
  
  return (
    <section className="displayAll">
      <Card 
        schoolData={ comparisonData[0] }
        handleCompareCards={ handleCompareCards }
        size='large'
      />

      <article className="comparison">
        <div>
          <h3>{ comparisonData[0].location }</h3>
          <h4>{ comparisonData[2][Object.keys(comparisonData[2])[0]] }</h4>
        </div>
        <div>
          <h3>Differential</h3>
          <h4 className='compare-total'>{ comparisonData[2].compared }</h4>
        </div>
        <div>
          <h3>{ comparisonData[1].location }</h3>
          <h4>{ comparisonData[2][Object.keys(comparisonData[2])[1]] }</h4>
        </div>
      </article>
      
      <Card 
        schoolData={ comparisonData[1] }
        handleCompareCards={ handleCompareCards }
        size='large'
      />
      <button onClick={ removeComparison }>Reset</button>
    </section>
  );
};

const { array, func } = PropTypes;

Comparison.propTypes = {
  comparisonData: array.isRequired,
  handleCompareCards: func.isRequired,
  removeComparison: func.isRequired
};

export default Comparison;