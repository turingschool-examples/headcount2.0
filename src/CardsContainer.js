import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/CardsContainer.css';

const CardsContainer = ({ districts }) => {
  return (
    <div className='CardsContainer'> 
      {
        Object.keys(districts.stats)
          .map( (district, index) => 
            <Card 
              district={districts.stats[district]}
              key={index}
            />
          )
      }
    </div>
  );
};

CardsContainer.propTypes = { 
  districts: PropTypes.object.isRequired
};

export default CardsContainer;