import React from 'react';
import PropTypes from 'prop-types';

const LocationList = (
  { cards, displayedLocations, selectLocation, clearSearch }
) => {
  const locationButtons = displayedLocations.map( (location, index) => {
    let buttonState = 'LocationList__btn';
    cards.forEach( card => {
      if (card.location === location) {
        buttonState = 'LocationList__btn selected';
      }
    })
    return <button 
      key={index}
      name={location}
      className={buttonState}
      onClick={ () => {
        clearSearch();
        selectLocation(location); 
      }} >
      {location}
    </button>
  });

  return (
    <div>
      {locationButtons}
    </div>
  );
};

export default LocationList;

LocationList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({ 
      average: PropTypes.number, 
      location: PropTypes.string, 
      stats: PropTypes.objectOf(PropTypes.number) 
    })
  ),
  displayedLocations: PropTypes.arrayOf(PropTypes.string),
  selectLocation: PropTypes.func,
  clearSearch: PropTypes.func
};