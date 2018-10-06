import React from 'react';

const ComparedCard = ({ data, location }) => {
  console.log('data', data)
  console.log('location', location)
  console.log('ov', Object.values(location))
  console.log('ok', Object.keys(location))
  return (
    <div className="compared-card">
      <h1>{Object.keys(location)[0]}  {Object.values(location)[0]}</h1>
      <h1>{Object.values(location)[2]}</h1>
      <h1>{Object.keys(location)[1]}  {Object.values(location)[1]}</h1>
    </div>
  );
};

export default ComparedCard;