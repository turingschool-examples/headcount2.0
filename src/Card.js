import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'

const Card = (props) => {
  let classBorder = 'card-wrapper';
  const stats = Object.keys(props.cardInfo.stats).map((currStat) => {
    let classString = 'low';
    if (props.cardInfo.stats[currStat] > 0.5) {
      classString = 'high';
    }
    if (props.cardInfo.selected === true) {
      classBorder = 'card-wrapper selected';
    }
    if (props.cardInfo.selected === false) {
      classBorder = 'card-wrapper';
    }
    return <li><span className="year">{currStat}</span> <span className="percentage" id={classString}>{props.cardInfo.stats[currStat]}</span></li>

  })

  return(
    <div className={classBorder} key={props.cardInfo.id} onClick={() => props.displaySelected(props.cardInfo)}>
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