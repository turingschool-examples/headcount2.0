import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

  let cardClass;
  props.district.selected === true 
    ? cardClass = 'card selected'
    : cardClass = 'card';

  const dataPoints = props.district.stats.map( year => {
    let dataClassName;
    year.data > 0.5 
      ? dataClassName = 'year-data greater-than' 
      : dataClassName = 'year-data less-than';
    return <p 
      className={dataClassName} 
      key={Math.random()}> {year.year}: {year.data} </p>;
  });

  return (
    <div className={cardClass} 
      onClick={()=> props.compareDistrictData(props.district)}>
      <h1 className='card-heading'>{props.district.location}</h1>
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
  compareDistrictData: PropTypes.func
};

export default Card;