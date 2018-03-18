import React from 'react';
import '../styles/Main.css';
import Card from './Card';
import ComparisonContainer from './ComparisonContainer';
import PropTypes from 'prop-types';

const Main = ({ title, 
  districts, 
  handleComparison, 
  cards, 
  clearedComparison, 
  generateComparisons }) => {
  const district = districts.map((district, idx) => {
    return (<Card 
      info={district} 
      key={idx} 
      handleComparison={handleComparison}/>);
  });
  
  return (
    <main>
      <h4>{title}</h4>
      {cards.length > 0 
        && <ComparisonContainer 
          cards={cards}
          handleComparison={handleComparison}
          clearedComparison={clearedComparison}
          generateComparisons={generateComparisons}/>}
      <section className='card-container'>{district}</section> 
    </main>
  );
};

Main.propTypes = {
  title: PropTypes.string,
  districts: PropTypes.array,
  handleComparison: PropTypes.func,
  cards: PropTypes.array,
  clearedComparison: PropTypes.func,
  generateComparisons: PropTypes.func
};

export default Main;