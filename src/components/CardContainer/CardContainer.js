import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardContainer = props => {
  return (
    <div>
      <h1>Card Container</h1>
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardContainer;
