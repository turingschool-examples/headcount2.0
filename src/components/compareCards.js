import React from 'react';
import Card from './Card';
import '../styles/CompareCards.css';
import ComparisonCard from '../components/ComparisonCard';
import PropTypes from 'prop-types';

const CompareCards = ({selectedCards, setSelectedCard, districts}) => {

  if(selectedCards.length > 0) {
    const comparedCards = selectedCards.map((card, index) => {
      return <Card {...card} key={index + 'district'} setSelectedCard={setSelectedCard} selectedCards={selectedCards} />
    });

    return (
      <div>
        <ComparisonCard 
          selectedCards={selectedCards}
          districts={districts}
        />
        {comparedCards}
      </div>
    );
  }
  return null
}

CompareCards.propTypes = {
  districts: PropTypes.string.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired
}

export default CompareCards;