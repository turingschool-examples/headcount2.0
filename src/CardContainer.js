import React from 'react';
import Card from './Card'

const CardContainer = ({ data }) => {

  // let makeCards = () => {
  //   props.data.map(point => {
  //     return <Data school={point} />
  //   })
  // }
  let schools = Object.keys(data);

  let cards = (
        schools.map(point => 
      <Card {...data[point]} className='card'/>
      ))


  return (
    <div className='card-container'>
      { cards }
    </div>
  )
    
  
}

export default CardContainer