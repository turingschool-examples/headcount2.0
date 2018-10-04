import React from 'react'
import PropTypes from 'prop-types'


const Card = ({districtData}) => {
  
  const dataPoints = districtData.stats.map( year => {
    return <p> {year.year}: {year.data} </p>

  })

  return(
    <div>
      <h1 className='card-heading'>{districtData.location}</h1>
      <div className='card-data'>
        {dataPoints}
      </div>
    </div>

  )
}

export default Card