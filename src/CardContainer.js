import React from 'react';
import Card from './Card';

const CardContainer = ({ dataObj }) => (
  <section>
    {Object.keys(dataObj).map((district) =>
      <Card
        key={district}
        districtName={district}
        districtObject={dataObj[district]} />
    )}
  </section>
);

export default CardContainer;
