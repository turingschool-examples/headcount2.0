import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({selectedCards, filteredCards, helper}) => {

  if (!filteredCards.length) {
    return(
      <div className="card-list">
        {Object.keys(helper.data).map((school, index) => {
          return(
            <Card schoolNames={school}
                  helper={helper}
                  key={index}/>
          )
        })}
      </div>
    )
  } else {
    console.log(filteredCards);
    console.log(Object.keys(helper.data));
    return(
      <div className="card-list">
        {filteredCards.map((school, index) => {
          // let upperCaseSchool = school.toUpperCase()

          return(
            <Card schoolNames={school}
                  helper={helper}
                  key={index}/>
          )
        })}
      </div>
    )
  }
}

export default CardList;
