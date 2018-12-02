import React from 'react';
import './CompareContainer.scss';
import Card from '../Card/Card.js';

const CompareContainer = ({compareMessage, districtsToCompare}) => {
  const cardsToCompare = []

  return (
    <section className="compare-container">
      <h2>{compareMessage}</h2>
      <article className="card-container">
        {cardsToCompare}
      </article>
    </section>
  )
}

export default CompareContainer;