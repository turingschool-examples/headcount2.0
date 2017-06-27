import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ location, data, handleCompare, compare, active }) => {
  const classname = active === true ? 'card active' : 'card'
  return (
    <div className={classname} key={location} onClick={() => handleCompare(location)}>
      <h1 className='cardTitle'>
        {location}
      </h1>
      {Object.keys(data).map((key, index) => {


        return (
          <div className='cardData' key={index}>
            <li className={
              data[key] <= 0.5 ? 'negative' : 'positive'
            }> {key}: {data[key]} </li>
          </div>
        )
      })}
    </div>
  );
}

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object,
  handleCompare: PropTypes.func,
}

export default Card;
