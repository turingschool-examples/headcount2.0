import React from 'react';
import '../styles/Main.css';
import Card from './Card'

const Main = ({ districts }) => {
  const district = districts.map((district, idx) => <Card info={district} key={idx}/>);
  return (
    <main className='card-container'>
      {district}
    </main>
  )
}

export default Main