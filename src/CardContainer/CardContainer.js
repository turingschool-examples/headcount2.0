import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css'

const CardContainer = ({ districtsData, updateCompareState }) => {
  // console.log("districtsData", districtsData.COLORADO);
  
  const districtCards = Object.keys(districtsData).map((key, index) => {
    return (
      <Card 
        key={ index } 
        district={ districtsData[key] }
        updateCompareState={ updateCompareState }
      />
    )
  });

  return(
    <div className="card-container">
      {districtCards}
    </div>
  )
}

CardContainer.propTypes = {
  districtsData: PropTypes.any.isRequired
}

export default CardContainer;

      