import React from 'react';

const DistrictCard = (props) => {
  console.log(Object.keys(props.stats))
  const allStats = Object.keys(props.stats).map(stat => <li>{stat}: {props.stats[stat]}</li>)
  console.log(allStats)
  return(
    <div>
      <h3>{props.location}</h3>
      <ul>{allStats}</ul>
    </div>
  )
}

export default DistrictCard;