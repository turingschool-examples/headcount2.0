import React from 'react';
import '../styles/Card.css'

const Card = (props) => {

const cardDisplay = Object.keys(props['data'].data).map( (year, index) => <li key={index}> {year} : {props['data'].data[year]} </li>)

  return (
    <article className='card'>
      <p>{props['data'].location}</p>
      <ul>{cardDisplay}</ul>
      
    </article>
    ) 
}

export default Card