import React from 'react';
import './Card.css'

const Card = (props) => {
  const dataMap = Object.keys(props.data).map( year => {
    return props.data[year] > 0.5 ? <li className="above">{year}: {props.data[year]}</li>: <li className="below">{year}: {props.data[year]}</li> })
  return (
    <div className="card">
      <h1>{props.location}</h1>
      <ul>{dataMap}</ul>
    </div>
  )
}

export default Card;
