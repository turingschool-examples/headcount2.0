
import React from 'react'
import CardContainer from './CardContainer'
import CompareContainer from './CompareContainer'

const MainContainer = () => {

  //controller for managing what two cards are selected to be compared

  return (
    <div className="main-container">
      <CardContainer />
      <CompareContainer />
    </div>
  )
};

export default MainContainer;
