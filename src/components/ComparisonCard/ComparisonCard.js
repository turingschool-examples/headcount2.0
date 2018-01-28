import React from 'react';
import './ComparisonCard.css'
import PropTypes from 'prop-types';

const ComparisonCard = ({comparedObject}) => {
  if (comparedObject) {
    return (
      <article className="compare-card">
        <h3 className="top">{Object.keys(comparedObject)[0]}</h3>
        <h4>{comparedObject[Object.keys(comparedObject)[0]]} avg</h4>
        <h1>{comparedObject.compared}</h1>
        <h4>{comparedObject[Object.keys(comparedObject)[1]]} avg</h4>
        <h3 className="bottom">{Object.keys(comparedObject)[1]}</h3>
      </article>
    );
  }
  
  return (
    <div></div>
  );
};

ComparisonCard.propTypes = {
  comparedObject: PropTypes.object.isRequired 
};

export default ComparisonCard;