import React from 'react';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import './Comparison.css';

const Comparison = (props) => {
  const district1 = props.selectedDistricts[0]
  const district2 = props.selectedDistricts[1]

  const card1Info = 
    <div onClick={(event) => { props.removeSelectedDistrict(district1.location) }}>
      <p>{district1.location}</p>
      <div>
        {Object.keys(district1.stats.data).map(year => {
          return (
            <p className={district1.stats.data[year] < .5 ? 'lower-half' : 'upper-half'} key={year}>{year} : {district1.stats.data[year]}</p>
          )
        })}
      </div>
    </div>

  let card2Info;
  let comparisonCard;

  if (props.selectedDistricts.length > 1) {
    card2Info = 
      <div onClick={() => props.removeSelectedDistrict(district2.location)}>
        <p>{district2.location}</p>
          <div>
            {Object.keys(district2.stats.data).map(year => {
              return (
                <p className={district2.stats.data[year] < .5 ? 'lower-half' : 'upper-half'} key={year}>{year} : {district2.stats.data[year]}</p>
              )
            })}
          </div>
      </div>

    const repository = new DistrictRepository(kinderData);

     comparisonCard = 
      <div>
        <p>{ district1.location } : { repository.findAverage(district1.location) }</p>
        <p>{ (repository.compareDistrictAverages(district1.location, district2.location)).compared }</p>
        <p>{ district2.location } : { repository.findAverage(district2.location) }</p>
      </div>
    }

  let finalComparisonInfo;

  if (props.selectedDistricts.length < 2) {
    finalComparisonInfo = 
    <div className='comparisonContainer'>
      <div className='card'>
        { card1Info }
      </div>
    </div>

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
    </div>
  }

  return (
    <div>
      { finalComparisonInfo }
    </div>
    )
}

export default Comparison;