import React from 'react';
import PropTypes from 'prop-types';

const LocationList = (
  { displayedLocations, selectLocation, clearSearch }
) => {
  const locationButtons = displayedLocations.map( (location, index) => (
    <button 
      key={index}
      name={location}
      className='LocationList__btn'
      onClick={ () => {
        clearSearch();
        selectLocation(location); 
      }} >
      {location}
    </button>
  ));

  return (
    <div>
      {locationButtons}
    </div>
  );
};

export default LocationList;

LocationList.propTypes = {
  displayedLocations: PropTypes.arrayOf(PropTypes.string),
  selectLocation: PropTypes.func,
  clearSearch: PropTypes.func
};