import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types'

function CardContainer({data, selected, handleClick}) {
  const allCities = data.map( (city, index) => {
    return <Card {...city} 
                 key={city.location + index}
                 handleClick={handleClick} />
  })

  const selectedCities = selected.map( (city, index) => {
    return <Card {...city}
                 key={city.location + index}
                 style={city.style} />
  })

  return (
    <div className='card-container'>
      <div className='selected-cities'>
        {selectedCities}
      </div>
      <div className='all-cities'>
        {allCities}
      </div>
    </div>

  )
}

CardContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.string.isRequired,

      data: PropTypes.shape({
        2004: PropTypes.number.isRequired,
        2005: PropTypes.number.isRequired,
        2006: PropTypes.number.isRequired,
        2007: PropTypes.number.isRequired,
        2008: PropTypes.number.isRequired,
        2009: PropTypes.number.isRequired,
        2010: PropTypes.number.isRequired,
        2011: PropTypes.number.isRequired,
        2012: PropTypes.number.isRequired,
        2013: PropTypes.number.isRequired,
        2014: PropTypes.number.isRequired
      }).isRequired
    })
  ).isRequired
};


export default CardContainer;