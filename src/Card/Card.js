import React from 'react';
import PropTypes from 'prop-types'

const Card = ( props ) => {
  let districtKeys = Object.keys(props.district.stats)
  const listItems = districtKeys.map(( stat, index ) => {
    return (
      <li key={ index }> { `${stat}: ${props.district.stats[stat]}` } </li>
    )
  })
  
  return (
    <div> 
      <h1>
        { props.district.location }
      </h1>
      <ul>
        { listItems }
      </ul>
    </div>

  )
}

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object)
}



export default Card;