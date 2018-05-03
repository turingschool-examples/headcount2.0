import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'

const Card = ( props ) => {
  // console.log(props)
  let districtKeys = Object.keys(props.district.stats)
  const listItems = districtKeys.map(( stat, index ) => {
    return (
      <li key={ index }> { `${stat}: ${props.district.stats[stat]}` } </li>
    )
  })
  
  return (
    <div className="card"> 
      <h3>
        { props.district.location }
      </h3>
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