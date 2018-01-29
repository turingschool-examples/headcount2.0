import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import arrow from '../../images/arrow2.gif';
import './CompareInstructions.css';

const CompareInstructions =
({ comparisonData, handleCompareCards, removeComparison }) => {
  return (
    <section className="displayOne">
      <div onClick={ removeComparison }>
        <Card 
          schoolData={ comparisonData.school1 }
          handleCompareCards={ handleCompareCards }
          size='small'
        />
      </div>
      <div className="instructions-cont">
        <p className='instructions'>
          click another to compare
        </p>
        <img
          src={arrow}
          alt="click another card to see a comparison of the two"
        />
      </div>
      <div className='shadow-card'>
      </div>
    </section>
  );
};

const { shape, string, objectOf, number, func, object } = PropTypes;

CompareInstructions.propTypes = {
  handleCompareCards: func.isRequired,
  removeComparison: func.isRequired,
  comparisonData: shape({
    comparison: object
  }),
  school1: 
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    })),
  school2: 
    objectOf(shape({
      location: string.isRequired,
      dataType: string,
      data: objectOf(
        number.isRequired)
    }))
};

export default CompareInstructions;