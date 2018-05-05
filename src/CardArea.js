import React from 'react';
import Card from './Card'
import './CardArea.css';

const CardArea = (props) => {
  const districtKeys = Object.keys(props.data)
  const districtCards = districtKeys.map((districtKey, index) =>
    <Card key={index} {...props.data[districtKey]} />
  );

  return(
    <div className="card-area">
      {districtCards}
    </div>
  )

}

export default CardArea;