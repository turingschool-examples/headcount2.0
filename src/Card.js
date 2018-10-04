import React from 'react'
import PropTypes from 'prop-types'

const Card = ({location, stats}) => {
  
  const dataPoints = stats.map( year => {
    return <p className='year-data' key={Math.random()}> {year.year}: {year.data} </p>

  })

  return(
    <div className='card'>
      <h1 className='card-heading'>{location}</h1>
      <div className='card-data'>
        {dataPoints}
      </div>
    </div>

  )
}

Card.propTypes = {
  districtData: PropTypes.object.isRequired
}

export default Card