import React from 'react';
import './DistrictCard.css'

const DistrictCard = (props) => {
  const info = Object.keys(props.stats.data).map(year => {
    return <p className={props.stats.data[year] < .5 ? 'less-than-half' : 'greater-than-half'} key={year}>{year} : {props.stats.data[year]}</p>
  })

  return (
    <div className='card'>
      <p>{props.location}</p>
        { info }
    </div>
    )
}

export default DistrictCard;