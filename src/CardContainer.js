import React from 'react';
import DistrictCard from './DistrictCard';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const cards = props.districts.map(district => {
    return (<DistrictCard location={district.location}
      stats={district.stats}
      key={district.location}
      addSelectedDistrict={props.addSelectedDistrict}/>);
  });
  
  return (
    <div className='card-container'>
      { cards }
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.array.isRequired,
  addSelectedDistrict: PropTypes.func.isRequired
};

export default CardContainer;