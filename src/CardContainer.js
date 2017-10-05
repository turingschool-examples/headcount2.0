import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({ dataArray }) => (
  <section>
    {dataArray.map((district) =>
      <Card
        key={district.location}
        districtName={district.location}
        districtObject={district.data} />
    )}
  </section>
);

CardContainer.propTypes = {
  dataArray: PropTypes.array
};

export default CardContainer;
