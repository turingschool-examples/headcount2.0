import React from 'react';
import '../styles/Main.css';
import Card from './Card'

const Main = ({ districts }) => {
  const district = Object.keys(districts.stats).map((district, idx) => <Card info={districts.stats[district]} key={idx}/>)
  // const district = districts.
  return (
    <div>
      {district}
    </div>
  )
}

export default Main