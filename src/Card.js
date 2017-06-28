import React from 'react';
import './Card.css';

const Card = ({schoolNames, helper}) => {
  const schoolName = helper.data[schoolNames].location;
  const annualData = helper.data[schoolNames].annualData;
  return (
    <div className="card">
      <h1>{schoolName}</h1>
      {Object.keys(annualData).map((year, index) => {
        if (annualData[year] <= 0.5) {
          return (
            <p className="less-than">{year}: {annualData[year]}</p>
          )
        } else {
          return (
            <p className="greater-than">{year}: {annualData[year]}</p>
          )
        }
      })}
    </div>
  )
}

export default Card;
