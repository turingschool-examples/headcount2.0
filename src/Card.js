import React from 'react';
import PropTypes from 'prop-types';

const Card = ({district, checkComparison, compareData}) => {

  const cardCheck = compareData.find( school => school.location === district.location)

  const cardState = cardCheck ? 'selected' : ''

  const dataPoints = district.stats.map( year => {
    const valueCheck = year.data > 0.5 
    const dataClassName = valueCheck
      ? 'year-data greater-than' 
      : 'year-data less-than';
      
    return <p 
      className={dataClassName} 
      key={Math.random()}
        > {year.year}: {year.data} </p>;
  });

  return (
    <div className={`card ${cardState}`} 
      onClick={()=> checkComparison(district)}>
      <h1 className='card-heading'>{district.location}</h1>
      <h2 className='sub-heading'>Kindergarten</h2>
      <div className='card-data'>
        {dataPoints}
        <p className='less-than-tag'>* less than 0.5</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  district: PropTypes.object,
  checkComparison: PropTypes.func
};

export default Card;