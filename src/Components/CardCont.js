import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './CardCont.css';

const CardCont = ({ data }) => {
  const displayDistrictCards = Object.values(data).map((district, i) => {
    return <Card  location={ district.location }
                  stats={ district.stats }
                  key={ `card-${i}` }
    />
  })

  return (
    <article className="card-cont">
      { displayDistrictCards }
    </article>
  )
}

CardCont.propTypes = {
  data: PropTypes.array
}

export default CardCont;