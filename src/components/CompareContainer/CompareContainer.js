import React from 'react';
import './CompareContainer.scss';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CompareContainer = ({ 
  compareMessage, 
  districtsToCompare, 
  addDistrictToCompare,
  districtAverages,
  resetComparison }) => {

  const cardsToCompare = districtsToCompare.map((district) => {
    return <Card location={district.location}
                  stats={district.stats}
                  key={district.location}
                  addDistrictToCompare={addDistrictToCompare} />
  })

  let compareCard = (
    <article className="compare-card">
      {compareMessage}
    </article>
  )

  if (districtsToCompare.length >= 2) {
    let location1 = districtsToCompare[0].location;
    let location2 = districtsToCompare[1].location;
    compareCard = (
      <article className="compare-card full-card">
        <div className="location1">
          <h2>{location1}</h2>
          <p>average over time {districtAverages[location1]}</p>
        </div>
        <h1 className="yellow">compared averages</h1> 
        <p className="yellow">{districtAverages.compared}</p>
        <div className="location2">
          <h2>{location2}</h2>
          <p>average over time {districtAverages[location2]}</p>
        </div>
      </article>
    )
  }

  return (
    <section className="compare-container card-container">
      {cardsToCompare[0]}
      <div className="comparison-area">
        {compareCard}
        <button className="reset-button" onClick={resetComparison}>Reset Comparison</button>
      </div>
      {cardsToCompare[1]}
    </section>
  )
}

CompareContainer.propTypes = {
  compareMessage: PropTypes.string.isRequired,
  districtsToCompare: PropTypes.array.isRequired,
  addDistrictToCompare: PropTypes.func.isRequired,
  districtAverages: PropTypes.object.isRequired,
  resetComparison: PropTypes.func.isRequired
}

export default CompareContainer;