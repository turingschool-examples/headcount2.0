import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import ComparisonCard from './ComparisonCard';

const borderColors = ['blue-border', 'green-border'];
const ComparisonContainer = (
  { comparisonArray, onCardClick, comparisonCardArray }
) => (
  <section>
    {
      comparisonArray.map( (selectedDistrict, index) => {
        return (
          <Card
            key={`comp-array-${index}`}
            borderColorClass={borderColors[index]}
            districtName={selectedDistrict.location}
            districtObject={selectedDistrict.data}
            onCardClick={onCardClick} />
        );
      })
    }
    {
      comparisonCardArray.map( (comparisonCard, index) => {
        let locationOne = Object.keys(comparisonCard)[0];
        let locationTwo = Object.keys(comparisonCard)[1];


        return (<ComparisonCard
          key={`comparisonCard${index}`}
          locationOne={locationOne}
          locationTwo={locationTwo}
          averageOne={comparisonCard[locationOne]}
          averageTwo={comparisonCard[locationTwo]}
          comparisonData={comparisonCard.compared} />);
      })
    }
  </section>
);

export default ComparisonContainer;

ComparisonContainer.propTypes = {
  comparisonArray: PropTypes.array,
  onCardClick: PropTypes.func,
  comparisonCardArray: PropTypes.array
};
