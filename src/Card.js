import React from 'react';
import PropTypes from 'prop-types';
import DistrictRepository from './helper.js';
const districts = new DistrictRepository()


const Card = ({ title, content, cardAverage, value }) => {
  const cardData =

    Object.keys(content).map(year => {
      const toggle = content[year] <= .5 ? 'low' : 'high'
      return <aside className={toggle}> {year}: {content[year]} </aside>

    })

  return(
    <div className="Card" onClick={() => districts.findAverage(title)} 
     value={value}>
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