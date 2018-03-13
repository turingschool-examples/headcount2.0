import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/CardsContainer.css';

const CardsContainer = ({ districts, searchValue, selectLocation, compareLocations }) => {
  if (searchValue){
    searchValue = searchValue.toUpperCase();
  }
  return (
    <div className='CardsContainer'> 
      {
        Object.keys(districts.stats)
          .map( (district, index) => {
            if (districts.stats[district].location.includes(searchValue)) {
              return <Card 
                district={districts.stats[district]}
                key={index} 
                selectLocation={selectLocation} 
                compareLocations={compareLocations} />;
            }
            return null;      
          })
      }
    </div>
  );
};

CardsContainer.propTypes = { 
  districts: PropTypes.object.isRequired,
  searchValue: PropTypes.string.isRequired
};

export default CardsContainer;