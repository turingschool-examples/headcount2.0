import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const borderColors = ['blue-border', 'green-border'];

const CardContainer = ({ dataArray, onCardClick, comparisonArray }) => (
  <section>
    {dataArray.map((district) => {
      return (
        <Card
          key={district.location}
          borderColorClass={borderColors[defineBorderColor(district, comparisonArray)]}
          districtName={district.location}
          districtObject={district.data}
          onCardClick={onCardClick} />
      );
    }
    )}
  </section>
);

const defineBorderColor = (displayArrayCard, comparisonArray) => {
  return (comparisonArray.findIndex( (comparisonArrayCard) => {
    return comparisonArrayCard.location === displayArrayCard.location;
  }));
};

CardContainer.propTypes = {
  dataArray: PropTypes.array,
  onCardClick: PropTypes.func,
  comparisonArray: PropTypes.array
};

export default CardContainer;
