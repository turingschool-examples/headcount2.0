import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ districts }) => {
  const displayDistrictData = Object.keys(districts.stats).map(
    (district, index) => {
      return (
        <Card
          location={district}
          stats={districts.stats[district].stats}
          key={index}
        />
      );
    }
  );

  return <React.Fragment>{displayDistrictData}</React.Fragment>;
};

CardContainer.propTypes = {
  districts: PropTypes.object
};

export default CardContainer;
