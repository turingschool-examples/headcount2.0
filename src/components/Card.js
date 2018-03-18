import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types'

const Card = ({ info, handleComparison}) => {
  const { location, data, selected } = info;
  let className = selected ? 'card selected' : 'card';

  const year = Object.keys(data).map((year, idx) => {
    let className = data[year] > 0.5 ? 'over-fifty' : 'under-fifty';
    return  <li className={className} key={idx}><span className='year'>{year}</span><span className='card-data'> : {(data[year] * 100).toFixed(1)}%</span></li> 
   })

  return (
    <article 
      className={className}
      onClick={() => {handleComparison(location)}
      }>
      <h2>{location}</h2>
      <p className='card-label'>Attendance:</p>
      <ul>
        {year}
      </ul>
      <button>{selected ? 'Remove Comparison' : 'Compare District'}</button>
    </article>
  )
}

Card.propTypes = {
  info: PropTypes.shape({
    location: PropTypes.string,
    data: PropTypes.object
  }) 
}

export default Card