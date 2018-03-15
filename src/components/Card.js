import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types'

const Card = ({ info, handleSelection}) => {
  const { location, data } = info
  const year = Object.keys(data).map((year, idx) => {
    return data[year] > 0.5 ? <li className="over-fifty" key={idx}>{year} : {data[year]}</li> : <li className="under-fifty" key={idx}>{year} : {data[year]}</li>
  })

  return (
    <article 
      className='card'
      onClick={() => {
        handleSelection(location) 
        // document.getElementById(location).classList.toggle('selected')
        }
      }>
      <h2>{location}</h2>
      <ul>
        {year}
      </ul>
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