import React from 'react';
import Card from './Card'

const CardArea = (props) => {
  const districtKeys = Object.keys(props.data)

  const districtCards = districtKeys.map((districtKey, index) => <Card key={index} {...props.data[districtKey]} />);

  
  return(
    <div>
      {districtCards}
    </div>
  )

}

export default CardArea;