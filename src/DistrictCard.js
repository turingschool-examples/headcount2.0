import React from 'react';
import './DistrictCard.css';

const DistrictCard = (props) => {
  const info = Object.keys(props.stats.data).map(year => {
    return <p className={props.stats.data[year] < .5 ? 'lower-half' : 'upper-half'} key={year}>{year} : {props.stats.data[year]}</p>;
  });

  return (
    <div className='card' onClick={() => props.addSelectedDistrict(props.location, info)}>
      <p>{props.location}</p>
      { info }
    </div>
  );
};

export default DistrictCard;