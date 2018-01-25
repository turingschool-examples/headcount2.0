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
      onClick={() => props.handleCompareCards(location)}
    >
      <h3>{location}</h3>
      <ul>
        { dataList }
      </ul>
    </article>
  );
};

const { shape, string, objectOf, number, func } = PropTypes;

Card.propTypes = {
  schoolData: shape({
    location: string.isRequired,
    data: objectOf(number.isRequired),
    dataType: string.isRequired
  }),
  handleCompareCards: func.isRequired
};

export default Card;