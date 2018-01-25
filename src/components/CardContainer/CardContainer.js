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
      size='large'
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

CardContainer.propTypes = {
  schoolData: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.shape({
      location: PropTypes.string.isRequired,
      dataType: PropTypes.string.isRequired,
      data: PropTypes.objectOf(
        PropTypes.number.isRequired)
    })),
    PropTypes.arrayOf(PropTypes.shape({
      location: PropTypes.string.isRequired,
      dataType: PropTypes.string.isRequired,
      data: PropTypes.objectOf(
        PropTypes.number.isRequired)
    }))
  ]),
  handleCompareCards: PropTypes.func.isRequired
};

export default CardContainer;