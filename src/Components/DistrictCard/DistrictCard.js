import React from 'react';

const DistrictCard = (district) => {
  const years = Object.keys(district.district.stats)
  console.log(years)
  return (
    <section> 
    <h2>District Name: {district.district.location}</h2>
    <ul>
      {years.map(year => {
        return <li>{}</li>
      })}
    </ul>

    </section>
  )
}

export default DistrictCard;