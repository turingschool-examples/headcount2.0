import React from 'react';
import Card from './Card';

const CardCont = ({ data }) => {
  console.log(Object.values(data))
  const districtCards = Object.entries(data).map((district, i) => {
    <Card {...district} 
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