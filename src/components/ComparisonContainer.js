import React from 'react';
import ComparisonCard from './ComparisonCard'
import Card from './Card'
import PropTypes from 'prop-types';

const ComparisonContainer = ({ cards }) => {

  const [cardA, comparisonCard, cardB] = cards
  
  return (
    <section>
      <Card info={cardA} />
      { comparisonCard && <ComparisonCard comparisonCard={comparisonCard} />}
      { comparisonCard && <Card info={cardB} />}
    </section>
  )
}

ComparisonContainer.propTypes = {
  cards: PropTypes.array
}

export default ComparisonContainer;
