import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './Comparison.css';

const Comparison = ({comparisonData, handleCompareCards, removeComparison}) => {
  
  return (
    <section className="displayAll">
      <Card 
        schoolData={ comparisonData.school1 }
        handleCompareCards={ handleCompareCards }
        size='large'
      />

      <article className="comparison">
        <div>
          <h3>{ comparisonData.school1.location }</h3>
          <h4>{ comparisonData.comparison[comparisonData.school1.location] }</h4>
        </div>
        <div>
          <h3>Differential</h3>
          <h4 className='compare-total'>{ comparisonData.comparison.compared }</h4>
        </div>
        <div>
          <h3>{ comparisonData.school2.location }</h3>
          <h4>{ comparisonData.comparison[comparisonData.school2.location] }</h4>
        </div>
      </article>

      <Card 
        schoolData={ comparisonData.school2 }
        handleCompareCards={ handleCompareCards }
        size='large'
      />
      <button onClick={ removeComparison }>Reset</button>
    </section>
  )
}

const { shape, string, objectOf, number, func, object } = PropTypes;

Comparison.propTypes = {
  handleCompareCards: func.isRequired,
  removeComparison: func.isRequired,
  comparisonData: shape({
    comparison: object
  }),
  school1: 
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    })),
  school2: 
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    }))
}

export default Comparison;