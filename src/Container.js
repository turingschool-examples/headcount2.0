import React from 'react';
import Card from './Card';

const Container = ({ data, clickActive }) => {
  const iterator = Object.keys(data).map(key => {
      return (
        <Card city= {data[key]} key={key} clickActive={clickActive} />
    )
  })



  return (
    <div className='card-container'>
      {iterator}
    </div>
  )
}

export default Container;
