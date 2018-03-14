import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/comparisonContainer.css'

const ComparisonContainer = ({selectedCards, comparison}) => {
  console.log(comparison)
  const comparisonCards = selectedCards.map((district, index) => {
    return (
      <Card location={district.location}
        data={district.data}
        key={district.location}
        // selectCard={selectCard}
        className="card"
    />)
  })
  return(
    <div className="comparison-container">
      {comparisonCards}
    </div>
  )
}



export default ComparisonContainer 