import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';


const Card = (props) => {
  let locationMatch = props.selectedCards.includes(props.location);
  const yearKeys = Object.keys(props.stats);
  const dataElement = yearKeys.map((year, index) => {
    let lowStat =  <span className="card-low-stat">{props.stats[year]}</span>;
    let highStat = props.stats[year];

    return (
      <li key={index} >
        <span className="card-year">{year + ": "}</span>
        {props.stats[year] < .5 ? lowStat : highStat}
      </li>
    );
  });

  return (
    <div className={locationMatch ? 'selected card' : 'card'} onClick={props.selectCard} >
      <h3>{props.location}</h3>
      <hr />
      <ul>
        { dataElement }
      </ul>
    </div>
  );
};

Card.propTypes = {
  props: PropTypes.objectOf(PropTypes.shape({
    data: PropTypes.object,
    selectCard: PropTypes.func,
    selectedCards: PropTypes.array
  })),
  selectCard: PropTypes.func,
  selectedCards: PropTypes.array,
  location: PropTypes.string
};

export default Card;
