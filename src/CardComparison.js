import React from 'react';
import Card from './Card';
import './CardComparison.css';
import PropTypes from 'prop-types';

const CardComparison = ({ analysis, checkComparison, clearComparison, compareData }) => {

  const districtA = Object.keys(analysis)[0];
  const distAAvg = Object.values(analysis)[0];
  const districtB = Object.keys(analysis)[1];
  const distBAvg = Object.values(analysis)[1];
  const comparison = Object.values(analysis)[2];

  const compareCards = compareData.map(district => {
    return <Card 
      district={district} 
      // key={Math.random()} 
      checkComparison={checkComparison} 
      clearComparison={clearComparison}
      compareData={compareData} />;
  });

  return (
    <div className='comparison-wrapper'>
      <h1 className='comparison-heading'>School District Comparison</h1>
        <div className="card-comparison-container">
            
          {compareCards}

          { compareData.length === 2 &&
            <div className='comparison-data'>
              
              <h3 className='district-name'>{districtA}</h3>
              <p className='district-avg'>Average: {distAAvg}</p>
              <h3 className='district-name'>{districtB}</h3>
              <p className='district-avg'>Average: {distBAvg}</p>
              <h4 className='comparison-value'>Compared Value: {comparison}</h4>
              <button 
                className="clear-btn" 
                onClick={()=> clearComparison()}>Clear</button>
            </div>
          }
        </div>
    </div>
  );
};

CardComparison.propTypes = {
  analysis: PropTypes.object.isRequired,
  compareData: PropTypes.array.isRequired,
  checkComparison: PropTypes.func.isRequired,
  clearComparison: PropTypes.func.isRequired
};

export default CardComparison;