import React from 'react';
import './Compare.css';

const CompareCard = ({compareInfo}) => {
  console.log(compareInfo)
  const newCompareInfo = Object.keys(compareInfo)
  return (
    <div className="card" onClick={this.handleCardClick}>
      <h3>
        {`${newCompareInfo[0]}: ${compareInfo[newCompareInfo[0]]}`}
      </h3>
      <h3>
        {`<-------${compareInfo.compared}------->`}
      </h3>
      <h3>
        {`${newCompareInfo[0]}: ${compareInfo[newCompareInfo[1]]}`}
      </h3>
    </div>
  )
}

export default CompareCard;