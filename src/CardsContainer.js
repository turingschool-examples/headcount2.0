import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './styles/CardsContainer.css';

const CardsContainer = ({ districts, searchValue }) => {
  return (
    <div className='CardsContainer'> 
      {
        Object.keys(districts.stats)
          .map( (district, index) => {
            if (districts.stats[district].location.includes(searchValue)) {
              return <Card 
              district={districts.stats[district]}
              key={index} />
            }
            return null;      
          })
        }
      }
    </div>
  );
};

CardsContainer.propTypes = { 
  districts: PropTypes.object.isRequired
};

export default CardsContainer;