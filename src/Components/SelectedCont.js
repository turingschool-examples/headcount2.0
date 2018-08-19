import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const SelectedCont = ({ selectedCards, selectCard, compareDistrictAverages }) => {
  const displaySelectedCards = Object.values(selectedCards).map((district, i) => {
    return  <Card location={district.location}
                  stats={district.stats}
                  isSelected={district.isSelected}
                  key={`sel-card${i}`}
                  selectCard={selectCard}
            />
  })

  const compareSelectedCards = () => {
    if (selectedCards.length === 2) {
      const location1 = selectedCards[0].location;
      const location2 = selectedCards[1].location;
      const comparedData = compareDistrictAverages(location1, location2); 
    
    return (
      <div className="compare-cont">
        {displaySelectedCards[0]}
        <div className="compare-info">
          <h2>{location1}{comparedData[location1]}</h2>
          <h2>{comparedData.compared}</h2>
          <h2>{location2}{comparedData[location2]}</h2>
        </div>
        {displaySelectedCards[1]}
      </div>
    )
    } else {
      return displaySelectedCards
    }
  }

  return (
    <article className="card-cont">
      {compareSelectedCards()}
    </article>
  )
}

SelectedCont.propTypes = {
  data: PropTypes.array
}

export default SelectedCont;