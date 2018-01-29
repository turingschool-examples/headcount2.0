import React from 'react';
import CompareInstructions from '../CompareInstructions/CompareInstructions';
import Comparison from '../Comparison/Comparison';
import PropTypes from 'prop-types';
import './CompareContainer.css';

const CompareContainer = 
({comparisonData, handleCompareCards, removeComparison}) => {
  const getDisplay = () => {
    if (!Object.keys(comparisonData).length) {
      return; 
    } else if (Object.keys(comparisonData).length === 1) {
      return (
        <CompareInstructions 
          comparisonData={ comparisonData }
          handleCompareCards={ handleCompareCards }
          removeComparison={ removeComparison }
        />
      );
    } else {
      return (
        <Comparison
          comparisonData={ comparisonData }
          handleCompareCards={ handleCompareCards }
          removeComparison={ removeComparison }
        />
      );
    }
  };

  return (
    <section className="CompareContainer">
      {getDisplay()}
    </section>
  );
};

const { shape, string, objectOf, number, func, object } = PropTypes;

CompareContainer.propTypes = {
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

export default CompareContainer;