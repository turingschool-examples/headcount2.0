import React from 'react'
import Card from './Card.js'
import './CardContainer.css'
import ComparedCard from './ComparedCard.js';

const CardContainer = ({ districts, filteredDistricts, selectedCards, displaySelected }) => {
  const displayDistricts = Object.keys(districts.stats).map((district, index )=> {
    return <Card      
      location={district} 
      stats={districts.stats[district].stats}
      key={index}
      displaySelected={displaySelected}
       />
  })

  const displayFilter = filteredDistricts.map((district, index) => {
    return <Card 
    location={district}
    stats={districts.stats[district].stats}
    key={index}
    displaySelected={displaySelected}
    />
  })

  const displaySelect = selectedCards.map((district, index) => {
    return <Card 
    location={district.location}
    stats={district.stats}
    key={index}
    displaySelected={displaySelected}
    />
    // <ComparedCard />
  })

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
          {displaySelect}
        </div>
        {displayDistricts}
      </div>
    )
  }
}

export default CardContainer

