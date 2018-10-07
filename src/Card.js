import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

  let cardClass;
  if(props.district.selected === true){
    cardClass = 'card selected'
  } else {
    cardClass = 'card'
  }



  const dataPoints = props.district.stats.map( year => {
    
    let dataClassName;
    year.data > 0.5 
      ? dataClassName = 'year-data greater-than' 
      : dataClassName = 'year-data less-than';

    return <p className={dataClassName} key={Math.random()}> {year.year}: {year.data} </p>;
  });




  return (
    <div className={cardClass} onClick={()=> props.compareDistrictData(props.district)}>
      <h1 className='card-heading'>{props.district.location}</h1>
      <div className='card-data'>
        {dataPoints}
        <p>* less than 0.5</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  district: PropTypes.object.isRequired
};

export default Card;