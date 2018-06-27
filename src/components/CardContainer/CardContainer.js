import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const CardContainer = props => {
  const { districts } = props;

  const districtData = districts.map(district => <Card {...district} key={district.location} />)

  return (
    <div>
      <h1>Card Container</h1>
      {districtData}
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardContainer;
