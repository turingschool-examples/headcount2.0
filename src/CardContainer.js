import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ dataArray, onCardClick }) => (
  <section>
    {dataArray.map((district) =>
      <Card
        key={district.location}
        districtName={district.location}
        districtObject={district.data}
        onCardClick={onCardClick} />
    )}
  </section>
);

CardContainer.propTypes = {
  dataArray: PropTypes.array,
  onCardClick: PropTypes.func
};

export default CardContainer;
