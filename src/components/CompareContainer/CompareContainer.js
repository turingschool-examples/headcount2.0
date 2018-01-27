import React from 'react';
import CompareInstructions from '../CompareInstructions/CompareInstructions';
import Comparison from '../Comparison/Comparison';
import PropTypes from 'prop-types';
import './CompareContainer.css';

const CompareContainer = ({comparisonData, handleCompareCards, removeComparison}) => {

  const getDisplay = () => {
    if (!comparisonData.length) {
      return; 
    } else if (comparisonData.length === 1) {
        return (
          <CompareInstructions 
            comparisonData={ comparisonData }
            handleCompareCards={ handleCompareCards }
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
  }

  const display = getDisplay();

  return (
    <section className="CompareContainer">
      {display}
    </section>
  );
};

export default CompareContainer;