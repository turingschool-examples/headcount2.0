import React from 'react';

const Card = ({ districtName, data, key }) => {
  const dataValues = Object.keys(data).map(year => 
    year + ': ' + data[year]
  )

  console.log(dataValues)

  return(
    <div>
      <h3>{districtName}</h3>
     
        {dataValues.map(value => <p>{value}</p>)}

    </div>
  )
}

export default Card;