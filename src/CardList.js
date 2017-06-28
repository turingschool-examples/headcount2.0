import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({selectedCards, filteredCards, helper}) => {

  if (!filteredCards.length) {
    return(
      <section>
        <div className="header-container">
          <div className="apple"></div>
          <div className="header">Headcount 2.0</div>
          <div className="bus"></div>  
        </div>
        <div className="card-list">
          {Object.keys(helper.data).map((school, index) => {
            return(
              <Card schoolNames={school}
                    helper={helper}
                    key={index}/>
            )
          })}
        </div>
      </section>
    )
  } else {
    console.log(filteredCards);
    console.log(Object.keys(helper.data));
    return(
      <div className="card-list">
        {filteredCards.map((school, index) => {
      
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
