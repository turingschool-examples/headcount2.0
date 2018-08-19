import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import HelperInfo from './HelperInfo';
import DistrictDropDown from './DistrictDropDown';

const CardContainer = ({ 
  cards, 
  averages, 
  selectLocation, 
  toggleHelperInfo, 
  toggleDropDown,
  changeDistrictData
}) => {
  const displayCards = cards.map( (card, index) => (
    <Card {...card} selectLocation={selectLocation} key={index} />
  ));

  let displayCompared = <p></p>;

  if (averages.compared >= 0) {
    displayCompared = 
      <div className='compared-average'>
        <p> 
          COMPARED AVERAGES: <span className='compared-average__num'>
            {averages.compared}
          </span>
        </p>
      </div>;
  }

  return (
    <div className='CardContainer'>
      <button 
        className='CardContainer__btn'
        onClick={ () => toggleHelperInfo() } > ? </button>
      <HelperInfo toggleHelperInfo={toggleHelperInfo} />
      <DistrictDropDown 
        toggleDropDown={toggleDropDown} 
        changeDistrictData={changeDistrictData} />
      <section className='CardContainer__section'>
        {displayCards}
      </section>
      {displayCompared}
    </div>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({ 
      average: PropTypes.number, 
      location: PropTypes.string, 
      stats: PropTypes.objectOf(PropTypes.number) 
    })
  ),
  averages: PropTypes.objectOf(PropTypes.number),
  selectLocation: PropTypes.func,
  toggleHelperInfo: PropTypes.func,
  toggleDropDown: PropTypes.func,
  changeDistrictData: PropTypes.func
};