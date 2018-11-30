import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {
  const stats = Object.keys(props.cardInfo.stats).map((currStat) => {
    let classString = 'low';
    if (props.cardInfo.stats[currStat] > 0.5) {
      classString = 'high';
    }
    return <li className={classString}><span className="year">{currStat}</span> <span className="percentage">{props.cardInfo.stats[currStat]}</span></li>

  })

  return(
    <div className="card-wrapper" key={props.cardInfo.id} onClick={() => props.displaySelected(props.cardInfo)}>
      <h1 className="location">{props.cardInfo.location}</h1>
        <p>
          <h3>YEAR</h3> 
          <h3>% ENROLLMENT</h3>
        </p>
      <ul className="stats">{stats}</ul>
    </div>
  )
}

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired 
}

export default Card;