import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, content}) => {
  const cardData =

    Object.keys(props.content).map(year => {
      const toggle = props.content[year] <= .5 ? 'low' : 'high'
      return <aside className={toggle}> {year}: {props.content[year]} </aside>

    })

  return(
    <div className="Card">
      <h3>{title}</h3>
      <ul>{cardData}</ul>
    </div>
    )
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object
}

export default Card;