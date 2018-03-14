import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/comparisonContainer.css'

const ComparisonContainer = ({selectedCards, comparison}) => {
  console.log(comparison)
  let newDistricts = []
  let newDistrictValues = []
  if (comparison) {
    newDistricts = Object.keys(comparison)
    newDistrictValues = Object.values(comparison)
    console.log(newDistricts)
  }
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
      <div className="comparison-card">
        <h2>{newDistricts[0]}</h2>
        <p>{newDistrictValues[0]}</p>
        <h2>{newDistricts[1]}</h2>
        <p>{newDistrictValues[1]}</p>
        <h2>{newDistricts[2]}</h2>
        <p>{newDistrictValues[2]}</p>
      </div>
    </div>
  )
}



export default ComparisonContainer 