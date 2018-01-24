import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card({location, data}) {

  const dataArray = Object.entries(data).map( dataPoint => {
    return <li> { dataPoint[0] } : { dataPoint[1] } </li>
  })

  return (
    <div className='district-card'>
      <h3 className='district-header'> { location } </h3>
      <ul className='district-list'> { dataArray } </ul>
    </div> 
  )
} 

Card.propTypes = {
  location: PropTypes.string.isRequired,

  data: PropTypes.object.isRequired
}
  

export default Card