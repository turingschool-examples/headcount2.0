import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import astronomy from '../../images/astronomy.svg';
import './CardContainer.css';

const CardContainer = ({schoolData, handleCompareCards}) => {
  const schoolsToRender = Object.keys(schoolData)
    .map((school, index) => <Card
      key={index}
      schoolData={schoolData[school]} 
      handleCompareCards={handleCompareCards}
    />);

  return (
    <div className="CardContainer">
      {schoolsToRender}
      <div className="bottom-images">
        <img src={astronomy} alt='telescope' className='school-icon' />
      </div>
    </div>
  );
};

const { oneOfType, objectOf, arrayOf,
  shape, string, number, func } = PropTypes;
  
CardContainer.propTypes = {
  schoolData: oneOfType([
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    })),
    arrayOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    }))
  ]),
  handleCompareCards: func.isRequired
};

export default CardContainer;