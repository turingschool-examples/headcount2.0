import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const borderColors = ['blue-border', 'green-border'];
const CardComparison = ( { comparisonArray, onCardClick, comparisonCardArray } ) => (
  <section>
    {
      comparisonArray.map( (selectedDistrict, index) => {
        return (
          <Card
          // key={`selectedIndex:${index}`}
            key={`comp-array-${index}`}
            borderColorClass={borderColors[index]}
            districtName={selectedDistrict.location}
            districtObject={selectedDistrict.data}
            onCardClick={onCardClick} />
        );
      })
    }
    {
      comparisonCardArray.map( () => {
        
      })
    }
  </section>
);

export default CardComparison;

CardComparison.propTypes = {
  comparisonArray: PropTypes.array,
  onCardClick: PropTypes.func,
  comparisonCardArray: PropTypes.array
};
