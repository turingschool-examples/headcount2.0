import React from 'react';


const DistrictCard = (props) => {
  const info = Object.keys(props.stats.data).map(year => {
    return <p key={year}>{year} : {props.stats.data[year]}</p>
  })

  return (
    <div>
      <p>{props.location}</p>
        { info }
    </div>
    )
}

export default DistrictCard;