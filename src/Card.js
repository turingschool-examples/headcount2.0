import React from 'react'
import PropTypes from 'prop-types'

const Card = ({district}) => {
  
  const dataPoints = district.stats.map( year => {
    return <p className='year-data' key={Math.random()}> {year.year}: {year.data} </p>

  })

  return(
    <div className='card'>
      <h1 className='card-heading'>{district.location}</h1>
      <div className='card-data'>
        {dataPoints}
      </div>
    </div>

  )
}

Card.propTypes = {
  district: PropTypes.object.isRequired,
  
}

export default Card