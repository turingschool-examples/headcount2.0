import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const borderColors = ['blue-border', 'green-border'];
const CardComparison = ( { comparisonArray, onCardClick } ) => (
  <div>
    {comparisonArray.map( (selectedDistrict, index) => {
      return (
        <Card
          // key={`selectedIndex:${index}`}
          key={selectedDistrict.location}
          borderColorClass={borderColors[index]}
          districtName={selectedDistrict.location}
          districtObject={selectedDistrict.data}
          onCardClick={onCardClick} />
      );
    })}
  </div>
);

export default CardComparison;

CardComparison.propTypes = {
  comparisonArray: PropTypes.array,
  onCardClick: PropTypes.func
};
