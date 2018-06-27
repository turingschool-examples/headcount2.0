import React from 'react';
import PropTypes from 'prop-types';

const Card = () => {
  return (
    <div>
      <h2>card component</h2>
    </div>
  );
};

Card.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Card;
