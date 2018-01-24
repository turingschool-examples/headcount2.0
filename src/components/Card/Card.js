import React from 'react';
import './Card.css';

function Card({location, data}) {

  const dataArray = Object.entries(data).map( dataPoint => {
    return <li> { dataPoint[0] } : { dataPoint[1] } </li>
  })


// turn data props into an array, map over it to plug it into <li>
// object.value to get the years
// map over that array and return an array 
// where each object is an index in the array
  return (
    <div className='district-card'>
      <h3 className='district-header'> { location } </h3>
      <ul className='district-list'> { dataArray } </ul>
    </div> 
  )
} 

export default Card