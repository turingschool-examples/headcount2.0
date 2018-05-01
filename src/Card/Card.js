import React from 'react';
import PropTypes from 'prop-types'

const Card = ( props ) => {
  const listItems = props.stats.map(( item, index ) => {
    return (
      <li key={ index }> { item } </li>
    )
  })
  
  return (
    <div> 
      <h1>
        { props.location }
      </h1>
      <ul>
        { listItems }
      </ul>
    </div>

  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object)
}



export default Card;