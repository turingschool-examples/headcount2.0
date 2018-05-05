import React from 'react';
import Card from './Card';
import './CardArea.css';
import PropTypes from 'prop-types';

const CardArea = (props) => {
  let cardObjectList = Array.from(props.data)

  const districtCards = cardObjectList.map((cardObj, index) =>
    <Card key={index} {...cardObj} selectCard={props.selectCard} selectedCards={props.selectedCards}/>
  );

  return(
    <div className="card-area">
      {districtCards}
    </div>
  )
}

CardArea.propTypes = {
  props: PropTypes.objectOf(PropTypes.shape({
    data: PropTypes.object,
    selectCard: PropTypes.func,
    selectedCards: PropTypes.array
  }))
}

export default CardArea;