import React from 'react';
import './ComparedCard.css';

const CompareCard = ({compareInfo}) => {
  const newCompareInfo = Object.keys(compareInfo)
  return (
    <div className="card clicked compare-card" onClick={this.handleCardClick}>
      <h3>
        {`${newCompareInfo[0]}: ${compareInfo[newCompareInfo[0]]}`}
      </h3>
      <h3>
        {`<------ ${compareInfo.compared} ------>`}
      </h3>
      <h3>
        {`${newCompareInfo[1]}: ${compareInfo[newCompareInfo[1]]}`}
      </h3>
    </div>
  )
}

export default CompareCard;