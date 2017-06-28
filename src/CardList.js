import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({selectedCards, helper}) => {
  return (
    <div className="card-list">
      {Object.keys(helper.data).map((school, index) => {

         return (
           <Card schoolNames={school}
                 helper={helper}
                 key={index}/>
         )
      })}
    </div>
  )
}

export default CardList;
