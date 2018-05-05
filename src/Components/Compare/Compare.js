import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const Compare = ({ compareCards, compareData, removeCompareCard }) => {
  const selectedCards = compareCards.map((district, index) => {
    const title = Object.keys(district)[0];
    const listOfData = Object.values(district)[0] 

    return <Card title={title}
                listOfData={listOfData}
                section='compare'
                removeCompareCard={removeCompareCard}
                key={`compareCard${index}`}
    />

  })

  function createCompareCard() {
    if (compareCards.length === 2 && compareData) {
      console.log(compareData)
    const compareDataEntries = Object.entries(compareData)
    const district1Title = compareDataEntries[0][0]
    const district1Average = compareDataEntries[0][1]
    const district2Title = compareDataEntries[1][0]
    const district2Average = compareDataEntries[1][1]
    const compared = compareDataEntries[2][1]

    return (
        <div className="card compare-data">
          <h3>{district1Title}: {district1Average}</h3>
          <h3>{compared}</h3>
          <h3>{district2Title}: {district2Average}</h3>
        </div>
      )
   }
  }

  return (
    <div className="card-container compare-cards">
     {selectedCards}

     { createCompareCard() } 

    </div>
    )
}

Compare.propTypes = {
  compareCards: PropTypes.array.isRequired
}

export default Compare;