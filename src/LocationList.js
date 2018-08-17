import React from 'react';
import Search from './Search';

const LocationList = ({ displayedLocations, 
                        selectLocation, 
                        searchLocations }) => {
  const locationButtons = displayedLocations.map((location, index) => (
    <button key={index}
            name={location}
            className='LocationList__btn'
            onClick={() => selectLocation(location)} >
      {location}
    </button>
  ));

  return (
    <aside className='LocationList'>
      <Search searchLocations={searchLocations} />
      {locationButtons}
    </aside>
  );
};

export default LocationList;