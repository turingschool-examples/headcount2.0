import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ( {title, listOfData} ) => {
    const listItems = listOfData.map((data, index) => {
      const dataCollection = Object.entries(data)
      const year = Object.keys(data)[0]
      const dataNum = Object.values(data)[0]
      const listItem = `${year}: ${dataNum}`
      return <li key={`listItem${index}`}> {listItem}</li>

  })

  return (
      <div className="card">
        <h3>{title}</h3>
        <ul>{listItems}</ul>
      </div>
    )
}

Card.propTypes = {
  title: PropTypes.string.isRequired, 
  listOfData: PropTypes.array.isRequired
}

export default Card;