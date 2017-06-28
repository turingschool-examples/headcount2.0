import React from 'react';
import './Card.css';

const Card = ({schoolNames, helper}) => {
  const schoolName = helper.data[schoolNames].location;
  const annualData = helper.data[schoolNames].annualData;
  console.log(annualData);
  return (
    <div className="card">
      <h1>{schoolName}</h1>
      {Object.keys(annualData).map((year, index) => {
        if (annualData[year] <= 0.5) {
          return (
            <ul>
              <li><p className="less-than data">{year}: {annualData[year]}</p></li>
            </ul>
          )
        } else {
          return (
            <ul>
              <li><p className="greater-than data">{year}: {annualData[year]}</p></li>
            </ul>
          )
        }
      })}
    </div>
  )
}

export default Card;
