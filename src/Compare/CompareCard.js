import React from 'react';
import './ComparedCard.css';
import PropTypes from 'prop-types';

const CompareCard = ({compareInfo}) => {
  const newCompareInfo = Object.keys(compareInfo);
  return (
    <div className="card clicked compare-card">
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
  );
};

CompareCard.propTypes = {
  compareInfo: PropTypes.object
};

export default CompareCard;