import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ districtName, data }) => {
  const dataValues = Object.keys(data).map( year => year + ': ' + data[year] )

  return(
    <article className='Card'>
      <h3>{districtName}</h3>
      {dataValues.map((value, index) => <p key={index}>{value}</p>)}
    </article>
  )
}

Card.propTypes = {
  districtName: PropTypes.string.isRequired,
  data: PropTypes.shape({
    2004: PropTypes.number.isRequired,
    2014: PropTypes.number.isRequired
  })
}

export default Card;