import React from 'react';
import Proptypes from 'prop-types';
import './CompareCard.css';

const CompareCard = ( { avgCard }) => {
  let avgCardKeys = Object.keys(avgCard);
  let avgCardValues = Object.values(avgCard);

  return (
    <div>
      <h3>{avgCardKeys[0]} : {avgCardValues[0]}</h3>
      <h3>{avgCardKeys[1]} : {avgCardValues[1]}</h3>
      <h3>{avgCardKeys[2]} : {avgCardValues[2]}</h3>

    </div>
  );
};

CompareCard.propTypes = {
  avgCard: Proptypes.array.isRequired
};

export default CompareCard;