import React from 'react';
import {Card} from './Card';
import './styles/cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({data}) => {

  const cardInfo = Object.keys(data).map(district => <Card location={data[district].location} data={data[district].data} key={district}/>)
  return (
    <div className="card-container">
      {cardInfo}
    </div>
  )

}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired
}