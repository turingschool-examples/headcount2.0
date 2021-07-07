import React from 'react'
import Card from './Card.js'
import './CardContainer.css'
import ComparedCard from './ComparedCard.js';
import PropTypes from 'prop-types'

const CardContainer = ({ districts, filteredDistricts, selectedCards, displaySelected, displayCompared, comparedCard }) => {
  console.log(Object.keys(comparedCard))
  const displayDistricts = Object.keys(districts.stats).map((district, index )=> {
    return <Card      
      location={district} 
      stats={districts.stats[district].stats}
      key={index}
      displaySelected={displaySelected}
      displayCompared={displayCompared}
       />
  })

  const displayFilter = filteredDistricts.map((district, index) => {
    return <Card 
    location={district}
    stats={districts.stats[district].stats}
    key={index}
    displaySelected={displaySelected}
    displayCompared={displayCompared}
    />
  })

  const displaySelect = selectedCards.map((district, index) => {
    return <Card 
    location={district.location}
    stats={district.stats}
    key={index}
    displaySelected={displaySelected}
    displayCompared={displayCompared}
    selected
    />
  })

  const displayComparedCard = Object.values(comparedCard)
  const comparedDistrictName = Object.keys(comparedCard)
  const comparedData = (<ComparedCard 
    firstDistrictName={comparedDistrictName[0]}
    firstDistrict={displayComparedCard[0]}
    compared={displayComparedCard[2]}
    secondDistrictName={comparedDistrictName[1]}
    secondDistrict={displayComparedCard[1]}
    />)
  

  if(displayFilter.length > 0) {
    return(
      <div className="cardList">
        {displayFilter}
      </div>
    )
  }  else {
    return(
      <div className="cardList">
        <div className="selectedCardDiv">
          {displaySelect[0]}
          {selectedCards.length > 1 && comparedData}
          {displaySelect[1]}
        </div>
        {displayDistricts}
      </div>
    )
  }
}

CardContainer.propTypes = {
  districts: PropTypes.object,
  filteredDistricts: PropTypes.array,
  selectedCards: PropTypes.array,
  displaySelected: PropTypes.func,
  displayCompared: PropTypes.func,
  comparedCard: PropTypes.object
}


export default CardContainer

