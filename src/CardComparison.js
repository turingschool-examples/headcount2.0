import React from 'react';
import Card from './Card';
import './CardComparison.css';
import PropTypes from 'prop-types';

const CardComparison = (props) => {

  const districtA = Object.keys(props.analysis)[0]
  const distAAvg = Object.values(props.analysis)[0]
  const districtB = Object.keys(props.analysis)[1]
  const distBAvg = Object.values(props.analysis)[1]
  const comparison = Object.values(props.analysis)[2]

  const compareCards = props.compareData.map(district => {
    return <Card district={district} key={Math.random()} compareDistrictData={props.compareDistrictData} />;
  });

    return(

      <div className="card-comparison-container">
        
        {compareCards}

        { props.compareData.length === 2 &&
          <div className='comparison-data'>
            <h3>{districtA}</h3>
            <p>Average: {distAAvg}</p>
            <h3>{districtB}</h3>
            <p>Average: {distBAvg}</p>
            <h4>Compared Value: {comparison}</h4>
          </div>
        }
        
      </div>
    );
  }

export default CardComparison