import React from 'react';
import Card from '../Card/Card';

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

export default Comparison;