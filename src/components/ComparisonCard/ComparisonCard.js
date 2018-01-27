import React from 'react';
import PropTypes from 'prop-types';

const ComparisonCard = ({comparedObject}) => {
  if (comparedObject) {
    return (
      <article>
        <h3>{Object.keys(comparedObject)[0]}</h3>
        <h3>{comparedObject[Object.keys(comparedObject)[0]]}</h3>
        <h1>{comparedObject.compared}</h1>
        <h3>{comparedObject[Object.keys(comparedObject)[1]]}</h3>
        <h3>{Object.keys(comparedObject)[1]}</h3>
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