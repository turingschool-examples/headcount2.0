import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CompareCard from './CompareCard';


const CompareContainer = ( { display, handleCompare, avgCard} ) => {
  let counter = 0;

  let comparedCards = display.map( comparison => {

    return <Card 
      {...comparison} 
      className={'card' + [comparison]} 
      key={counter++} 
      handleCompare={ handleCompare }/>;
  }

  );
  return (
    <div>
      { comparedCards }
      <CompareCard avgCard={ avgCard }/>
    </div>
  );
  

};
  

CompareContainer.propTypes = {
  display: PropTypes.array.isRequired,
  handleCompare: PropTypes.func,
  avgCard: PropTypes.array.isRequired
};

export default CompareContainer;