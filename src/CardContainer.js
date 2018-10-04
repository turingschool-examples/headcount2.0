import React from 'react';
import DistrictCard from './DistrictCard';
import './CardContainer.css'

const CardContainer = (props) => {
  const cards = props.districts.map(district => {
    return (<DistrictCard location={district.location}
                          stats={district.stats}
                          key={district.location}/>)
  })
  
  return(
    <div className='card-container'>
      { cards }
    </div>
    )
}

export default CardContainer;