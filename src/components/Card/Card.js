import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const { location, data } = props.schoolData;
  const dataList = Object.keys(data)
    .map((year, index) => {
      let average;
      data[year] >= 0.5 ? average = 'high' : average = 'low';
      return <li key={index} className={average} >{year}: {data[year]}</li>;
    });

  return (
    <article 
      className='Card'
      id={props.size}
      onClick={() => props.handleCompareCards(location)}
    >
      <h3>{location}</h3>
      <ul>
        { dataList }
      </ul>
    </article>
  );
};

Card.propTypes = {
  schoolData: PropTypes.shape({
    location: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.number.isRequired),
    dataType: PropTypes.string.isRequired
  }),
  handleCompareCards: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
};

export default Card;