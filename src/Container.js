import React from 'react';
import Card from './Card';

const Container = ({ data }) => {
  const iterator = Object.keys(data).map(key => {
      return (
        <Card city= {data[key]} />
    )
  })



  return (
    <div className='card-container'>
      {iterator}
    </div>
  )
}

export default Container;
