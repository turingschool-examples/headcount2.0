import React from 'react';
import '../styles/Main.css';
import Card from './Card';
import ComparisonContainer from './ComparisonContainer'
import PropTypes from 'prop-types';

const Main = ( { districts, handleSelection, cards } ) => {
  const district = districts.map((district, idx) => <Card info={district} key={idx} handleSelection={handleSelection}/>);
  return (
    <main>
      {cards.length > 0 && <ComparisonContainer cards={cards} />}
      <section className='card-container'>{district}</section>
      
    </main>
  )
}

Main.propTypes = {
  districts: PropTypes.array
}

export default Main