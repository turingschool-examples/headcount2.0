import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card({ location, data, handleClick, style }) {

  const dataArray = Object.entries(data).map( (dataPoint, index) => {
    return (
      <li key={dataPoint[0] + index}> 
        { dataPoint[0] } : { dataPoint[1] } 
      </li>
    );
  });

  return (
    <div className={ style ||'district-card' } 
      onClick={ handleClick } 
      id={ location }>
      <h3 className='district-header'> { location } </h3>
      <ul className='district-list'> { dataArray } </ul>
    </div> 
  );
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  style: PropTypes.string,
  data: PropTypes.object.isRequired
};
  
export default Card;