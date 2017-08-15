import React, { Component } from 'react';

const SchoolCard = ({data}) => {
  const {Location, Data} = data;
  const yearsKeys = Object.keys(Data)
  const percentages = yearsKeys.map(year => <li>{year}: {Data[year]}</li>)

  return (
    <div>
      <h3>{Location}</h3>
      <p>Average</p>
      <ul>
        {percentages}
      </ul>
    </div>
  )
}

export default SchoolCard
