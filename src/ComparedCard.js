import React from 'react';
import PropTypes from 'prop-types';

const ComparedCard = ({ location }) => {
  return (
    <div className={location ? 'isActive' : 'isNotActive'}>
      <h1>{Object.keys(location)[0]}  {Object.values(location)[0]}</h1>
      <h2>{Object.values(location)[2]}</h2>
      <h1>{Object.keys(location)[1]}  {Object.values(location)[1]}</h1>
    </div>
  );
};

ComparedCard.propTypes = {
  location: PropTypes.array
};
export default ComparedCard;