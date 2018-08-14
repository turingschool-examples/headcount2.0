import React from 'react';
import Card from './Card';

const CardCont = ({ data }) => {
  const districtCards = Object.values(data).map((district, i) => {
    console.log(district)
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

export default CardCont;