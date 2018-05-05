import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const Compare = ({ compareCards, compareData }) => {
  const selectedCards = compareCards.map((district, index) => {
    const title = Object.keys(district)[0];
    const listOfData = Object.values(district)[0] 

    return <Card title={title}
                listOfData={listOfData}
                key={`compareCard${index}`}
    />
  })

  return (
    <div className="card-container compare-cards">
     {selectedCards}
    </div>
    )
}

Compare.propTypes = {
  compareCards: PropTypes.array.isRequired
}

export default Compare;