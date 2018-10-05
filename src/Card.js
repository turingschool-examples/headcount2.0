import React from 'react'
import PropTypes from 'prop-types'

const Card = ({district}) => {
  
  const dataPoints = district.stats.map( year => {
    
    let classname;
    year.data > 0.5 ? classname = 'year-data greater-than' : classname = 'year-data less-than'

    return <p className={classname} key={Math.random()}> {year.year}: {year.data} </p>

  })

  return(
    <div className='card'>
      <h1 className='card-heading'>{district.location}</h1>
      <div className='card-data'>
        {dataPoints}
        <p>* less than 0.5</p>
      </div>
    </div>

  )
}

Card.propTypes = {
  district: PropTypes.object.isRequired,
  
}

export default Card