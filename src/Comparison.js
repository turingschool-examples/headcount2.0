import React from 'react';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types';
import './Comparison.css';

const Comparison = (props) => {
  const dist1 = props.selectedDistricts[0];
  const dist2 = props.selectedDistricts[1];

  const card1Info = 
    <div onClick={() => { props.removeSelectedDistrict(dist1.location); }}>
      <p>{dist1.location}</p>
      <div>
        {Object.keys(dist1.stats.data).map(year => {
          return (
            <p className=
              {dist1.stats.data[year] < .5 ? 'lower-half' : 'upper-half'} 
            key={year}>{year} : {dist1.stats.data[year]}</p>
          );
        })}
      </div>
    </div>;

  let card2Info;
  let comparisonCard;

  if (props.selectedDistricts.length > 1) {
    card2Info = 
      <div onClick={() => props.removeSelectedDistrict(dist2.location)}>
        <p>{dist2.location}</p>
        <div>
          {Object.keys(dist2.stats.data).map(year => {
            return (
              <p className=
                {dist2.stats.data[year] < .5 ? 'lower-half' : 'upper-half'}
              key={year}>{year} : {dist2.stats.data[year]}</p>
            );
          })}
        </div>
      </div>;

    const repo = new DistrictRepository(kinderData);

    let comp = repo.compareDistrictAverages(dist1.location, dist2.location);

    comparisonCard = 
      <div>
        <p>
          { dist1.location } : { repo.findAverage(dist1.location) }
        </p>
        <p>
          { comp.compared }
        </p>
        <p>{ dist2.location } : { repo.findAverage(dist2.location) }</p>
      </div>;
  }

  let finalComparisonInfo;

  if (props.selectedDistricts.length < 2) {
    finalComparisonInfo = 
    <div className='comparisonContainer'>
      <div className='card'>
        { card1Info }
      </div>
    </div>;

  } else {
    finalComparisonInfo = 
    <div className='comparisonContainer'>
      <div className='card'>
        { card1Info }
      </div>
      <div className='card comparisonCard'>
        { comparisonCard }
      </div>
      <div className='card'>
        { card2Info }
      </div>
    </div>;
  }

  return (
    <div>
      { finalComparisonInfo }
    </div>
  );
};

Comparison.propTypes = {
  selectedDistricts: PropTypes.array.isRequired,
  removeSelectedDistrict: PropTypes.func.isRequired
};

export default Comparison;