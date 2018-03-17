import React from 'react';
import ComparisonCard from './ComparisonCard'
import Card from './Card'
import PropTypes from 'prop-types';
import '../styles/ComparisonContainer.css'

const ComparisonContainer = ({ cards, handleSelection }) => {

  const [cardA, comparisonCard, cardB] = cards
  
  return (
    <section className='comparison-container'>
      <Card info={cardA} handleSelection={handleSelection} />
      { comparisonCard && <ComparisonCard comparisonCard={comparisonCard} />}
      { comparisonCard && <Card info={cardB} handleSelection={handleSelection} />}
    </section>
  )
}

ComparisonContainer.propTypes = {
  cards: PropTypes.array
}

export default ComparisonContainer;
