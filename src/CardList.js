import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({selectedCards, filteredCards, helper}) => {
  let cardsToRender = filteredCards
  if (cardsToRender.length === 0) cardsToRender = helper.data

  const renderVal = Object.keys(cardsToRender).map((school, index) => {
    return(
      <Card schoolNames={school}
            helper={helper}
            id={index}
            key={Math.round(Date.now() * Math.random())}
            selectedCards={selectedCards}/>
    )
  })

  return(
    <section>
      <div className="header-container">
        <div className="apple"></div>
        <div className="header">Headcount 2.0</div>
        <div className="bus"></div>
      </div>
      <div className="card-list">
        {renderVal}
      </div>
    </section>
  )
  // if (!filteredCards.length) {
  //   return(
  //   )
  // } else {
  //   return(
  //     <div className="card-list">
  //       {filteredCards.map((school, index) => {
  //
  //         return(
  //           <Card schoolNames={school}
  //                 helper={helper}
  //                 id={index}
  //                 key={index}
  //                 selectedCards={selectedCards}/>
  //         )
  //       })}
  //     </div>
  //   )
  // }
}

export default CardList;
