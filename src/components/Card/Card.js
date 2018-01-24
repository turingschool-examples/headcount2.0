import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ districtName, data, key }) => {
  const dataValues = Object.keys(data).map( year =>
    data[year] > 0.5 ? <li className="over">{year}: {data[year]}</li>
    :
    <li className="under">{year}: {data[year]}</li>
  )

  return(
    <article className='Card'>
      <h3>{districtName}</h3>
      <ul>
        {dataValues}
      </ul>
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