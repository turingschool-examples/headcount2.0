import React from 'react';
import Card from './Card';
import './CardComparison.css';
import PropTypes from 'prop-types';

const CardComparison = (props) => {

  const districtA = Object.keys(props.analysis)[0];
  const distAAvg = Object.values(props.analysis)[0];
  const districtB = Object.keys(props.analysis)[1];
  const distBAvg = Object.values(props.analysis)[1];
  const comparison = Object.values(props.analysis)[2];

  const compareCards = props.compareData.map(district => {
    return <Card 
      district={district} 
      key={Math.random()} 
      compareDistrictData={props.compareDistrictData} 
      clearComparison={this.clearComparison} />;
  });

  return (
    <div className="card-comparison-container">
        
      {compareCards}

      { props.compareData.length === 2 &&
          <div className='comparison-data'>
            <h1 className='comparison-heading'>School District Comparison</h1>
            <h3 className='district-name'>{districtA}</h3>
            <p className='district-avg'>Average: {distAAvg}</p>
            <h3 className='district-name'>{districtB}</h3>
            <p className='district-avg'>Average: {distBAvg}</p>
            <h4 className='comparison-value'>Compared Value: {comparison}</h4>
            <button 
              className="clear-btn" 
              onClick={()=> props.clearComparison()}>Clear</button>
          </div>
      
      }
    </div>
  );
};

CardComparison.propTypes = {
  // district: PropTypes.object.isRequired
  analysis: PropTypes.object.isRequired,
  compareData: PropTypes.array.isRequired,
  compareDistrictData: PropTypes.func.isRequired,
  clearComparison: PropTypes.func.isRequired
};

export default CardComparison;