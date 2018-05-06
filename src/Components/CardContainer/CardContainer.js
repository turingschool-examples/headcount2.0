import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ repo, addCompareCard, removeCompareCard }) => {
  const cardList = repo.map((district, index) => {
    const title = Object.keys(district)[0];
    const listOfData = Object.values(district)[0];

    return <Card title={ title }
                 listOfData={ listOfData }
                 addCompareCard={ addCompareCard } 
                 removeCompareCard={ removeCompareCard }
                 selected={ district.selected }
                 key={ `Card${index}` }
           />;

  });

  return (
    <div className="card-container">
      { cardList }
    </div>
  );

}

CardContainer.propTypes = {
  repo: PropTypes.array.isRequired
}

export default CardContainer; 
