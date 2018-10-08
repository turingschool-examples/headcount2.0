import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types';

const DistrictCard = (props) => {
  const info = Object.keys(props.stats.data).map(year => {
    return <p 
      className={props.stats.data[year] < .5 ? 'lower-half' : 'upper-half'}
      key={year}>{year} : {props.stats.data[year]}</p>;
  });

  return (
    <div 
      className='card' 
      onClick={() => props.addSelectedDistrict(props.location, props.stats)}>
      <p>{props.location}</p>
      { info }
    </div>
  );
};

DistrictCard.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  addSelectedDistrict: PropTypes.func.isRequired
};

export default DistrictCard;