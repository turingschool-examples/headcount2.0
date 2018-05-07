import React from 'react';
import Card from '../Card/Card';
import './CardArea.css';
import PropTypes from 'prop-types';

const CardArea = (props) => {
  let cardObjectList = Array.from(props.cleanData);

  const districtCards = cardObjectList.map((cardObj, index) =>
    <Card 
      key={index} 
      {...cardObj} 
      selectCard={props.selectCard} 
      selectedCards={props.selectedCards}
    />
  );

  return (
    <div className="card-area">
      {districtCards}
    </div>
  );
};

CardArea.propTypes = {
  props: PropTypes.objectOf(PropTypes.shape({
    cleanData: PropTypes.object.isRequired,
    selectCard: PropTypes.func.isRequired,
    selectedCards: PropTypes.array.isRequired
  })),
  cleanData: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired
};

export default CardArea;