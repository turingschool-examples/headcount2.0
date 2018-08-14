import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardCont = ({ data }) => {
  console.log(data)
  const districtCards = Object.values(data).map((district, i) => {
    return <Card  location={ district.location }
                  stats={ district.stats }
                  key={ i }
    />
  })

  return (
    <section className="card-cont">
      { districtCards }
    </section>
  )
}

CardCont.propTypes = {
  data: PropTypes.shape({
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
  })
}

export default CardCont;