import React from 'react';
import './CardContainer.scss';
import Card from '../Card/Card.js';
import CompareContainer from '../CompareContainer/CompareContainer.js';
import PropTypes from 'prop-types';

const CardContainer = ({districtData, compareMessage, districtsToCompare}) => {
  const cards = districtData.map((district) => {
    return <Card location={district.location}
                  stats={district.stats}
                  key={district.location} />;
  });
  
  return (
    <section className="card-section">
      <h1 className="title-header">Kindergartners In Full Day Programs</h1>
        <CompareContainer compareMessage={compareMessage}
                          districtsToCompare={districtsToCompare} />

        <article className="card-container">
        {cards}
      </article>
    </section>
  );
}

CardContainer.propTypes = {
  districtData: PropTypes.array.isRequired,
  compareMessage: PropTypes.string.isRequired,
  districtsToCompare: PropTypes.array.isRequired
}

export default CardContainer;