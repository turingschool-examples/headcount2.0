import React from 'react';

const Card = (props) => {
  const cardData =
    Object.keys(props.content).map(year => {
      return <li> {year}: {props.content[year]} </li>
    })

  return(
    <div className="Card">
      <h3>{props.title}</h3>
      <ul>{cardData}</ul>
    </div>
    )
}

export default Card;