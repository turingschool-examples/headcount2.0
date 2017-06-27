import React from 'react';
import Card from './Card';

const Container = ({ data }) => {
  console.log(data);
  const iterator = Object.keys(data).map(key => {
      return (
        <Card city= {data[key]} />
    )
  })



  return (
    <div>
    Hello again
      {iterator}
    </div>
  )
}

export default Container;
