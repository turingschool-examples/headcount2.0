import React from 'react';
import ComparisonCard from './ComparisonCard'
import Card from './Card'
import PropTypes from 'prop-types';
import '../styles/ComparisonContainer.css'

const ComparisonContainer = ({ cards, handleComparison, clearedComparison, generateComparisons }) => {
  const [cardA , cardB] = cards
  return (
    <section className='comparison-container'>
      <Card info={cardA} handleComparison={handleComparison} />
       { cardB && <ComparisonCard 
            comparisonCard={generateComparisons(cardA.location, cardB.location)}
            clearedComparison={clearedComparison} />}
      { cardB && <Card info={cardB} handleComparison={handleComparison} />}
    </section>
  )
}

ComparisonContainer.propTypes = {
  cards: PropTypes.array
}

export default ComparisonContainer;
